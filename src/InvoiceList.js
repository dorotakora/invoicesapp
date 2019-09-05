import React from "react";
import {Link} from "react-router-dom";
import './css/main.scss';

let invoicesData = [],
    invoicesElement;

class InvoiceList extends React.Component {

    state = {
        invoicesElement: ''
    };

    handleGetInvoices = () => {

        if (localStorage.getItem('invoices')) {
            invoicesElement = JSON.parse(localStorage.getItem('invoices')).map((e, i) => {
                invoicesData.push(e);
                return (<table key={i} className='newInvoice'>
                    <tbody>
                    <tr>
                        <td>{e.invoiceNumber}</td>
                        <td>{e.issueDate}</td>
                        <td>{e.buyerName}</td>
                        <td>{e.buyerTaxNo}</td>
                        <td>{e.totalTax}</td>
                        <td>{e.totalGross}</td>
                        <td><button className='deleteInvoice' onClick={this.deleteInvoice.bind(this, e)}>X</button></td>
                    </tr>
                    </tbody>
                </table>)
            });
            this.setState({
                invoicesElement: invoicesElement,
                invoicesData: invoicesData
            })
        }
    };

    deleteInvoice(e) {

        let index = invoicesData.findIndex(i => i.invoiceNumber === e.invoiceNumber);
        // remove from state
        invoicesElement.splice(index, 1);
        invoicesData.splice(index, 1);

        this.setState({
            invoicesElement: invoicesElement,
            invoicesData: invoicesData
        }, () => {
            console.log('-- save to localStorage after deleteInvoice --');
            localStorage.setItem('invoices', JSON.stringify(invoicesData));
        });
    }

    render(){

        return <>
            <div className='listOfInvoices'>

                <div className='headerDiv'>
                    <h1>Lista faktur</h1>
                    <table className='headerTable'>
                        <tbody>
                        <tr>
                            <td>Numer</td>
                            <td>Data wystawienia</td>
                            <td>Klient</td>
                            <td>NIP</td>
                            <td>Wartość netto</td>
                            <td>Wartość brutto</td>
                            <td></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className='listInvoices'>{this.state.invoicesElement}</div>
                <div>
                    <button className='getListOfInvoiceBtn' onClick={this.handleGetInvoices}>Pobierz liste faktur</button>
                    {/*<button className={'invoiceListBtn'} <Link class={'link'} to="/list/edit">Edytuj fakturę</Link></button>*/}
                    <button className='invoiceListBtn' ><Link className='link' to="/new">Nowa faktura</Link></button>
                </div>
            </div>
        </>
    }
}
export {InvoiceList};

