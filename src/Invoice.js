import React from "react";
import InvoiceHeader from './InvoiceHeader';
import InvoiceSeller from './InvoiceSeller';
import InvoiceBuyer from './InvoiceBuyer';
import InvoicePosition from './InvoicePosition';
import {Link} from "react-router-dom";


export class InvoiceSaveBtn extends React.Component {
    render() {
        return <div>
            <button onClick={this.props.saveInvoice} className='saveToBtn'>Zapisz</button>
            <button className='invoiceBtn'><Link className='link' to="/list">Lista faktur</Link></button>
        </div>
    }
}

class Invoice extends React.Component {

    minDate = new Date().toISOString().slice(0, 10);
    setInvoiceNumber = () => {

        let counter,
            iNum,
            iNumArr;


        if(localStorage.getItem('invoices') !== 'undefined' && localStorage.getItem('invoices') !== null  && localStorage.getItem('invoices').length !== 0) {
            console.log('if');
            iNum = JSON.parse(localStorage.getItem('invoices'))[JSON.parse(localStorage.getItem('invoices')).length -1].invoiceNumber;
            iNumArr = iNum.split('/');
            counter = iNumArr[0];
            return (Number(counter) + 1) + '/'  + new Date().toLocaleDateString().slice(3, 10).replace('.', '/');
        }else {
            console.log('else');
            return 1 + '/'  + new Date().toLocaleDateString().slice(3, 10).replace('.', '/');
        }

    };

    state = {
            invoiceNumber: this.setInvoiceNumber(),
            issueDate: this.minDate,
            place: 'Warszawa',
            sellDate: this.minDate,
            sellerName: '',
            sellerTaxNo: '',
            sellerStreet: '',
            postcode: '',
            sellerCity: '',
            buyerName: '',
            buyerTaxNo: '',
            buyerStreet: '',
            buyerPostcode: '',
            buyerCity: '',
            list: [{
                positionAttributes: '',
                positionQuantity: '',
                positionUnit: '',
                positionPriceNet: '',
                positionTax: '',
                positionTotalNet: '',
                positionTotalGross: ''
            }],
            totalTax: 0,
            totalNet: 0,
            totalGross: 0,
    };


    handleInvoiceData = (event) => {
        const { name, value } = event.target;
            this.setState({
                [name]: value
            })
    };

    handleInvoicePosition = event => {
        if (['positionAttributes',
            'positionQuantity',
            'positionUnit',
            'positionPriceNet',
            'positionTax',
            'positionTotalNet',
            'positionTotalGross'].includes(event.target.className)) {
            let list = [...this.state.list];
            list[event.target.id][event.target.className] = event.target.value;

            list[event.target.id].positionTotalNet = list[event.target.id].positionQuantity * list[event.target.id].positionPriceNet;
            list[event.target.id].positionTotalNet.toFixed(2);
            list[event.target.id].positionTotalGross = list[event.target.id].positionTotalNet + (list[event.target.id].positionTotalNet * list[event.target.id].positionTax);
            list[event.target.id].positionTotalGross.toFixed(2);

            // set totalTax, totalNet, totalGross
            let totalTax = 0,
                totalNet = 0,
                totalGross = 0;

            list.forEach((e, i) => {
                    totalTax += (Number(e.positionTax) * Number(e.positionPriceNet));
                    totalNet += Number(e.positionTotalNet);
                    totalGross += Number(e.positionTotalGross);
            });

            this.setState({
                list: list,
                totalTax: Number(totalTax.toFixed(2)),
                totalNet: Number(totalNet.toFixed(2)),
                totalGross: Number(totalGross.toFixed(2)),
            });
        }
    };

    handleAddInvoicePosition = (event) => {
        event.preventDefault();
        this.setState((prevState) => ({
            list: [...prevState.list, {
                positionAttributes: '',
                positionQuantity: '',
                positionUnit: '',
                positionPriceNet: '',
                positionTax: '',
                positionTotalNet: '',
                positionTotalGross: ''
            }],
        }));
    };

    handleSaveInvoice = (event) => {
        event.preventDefault();
        const {invoiceNumber, issueDate, place,sellDate,sellerName,sellerTaxNo,sellerStreet,postcode,sellerCity,buyerName,buyerTaxNo,buyerStreet,buyerPostcode,buyerCity,totalTax,totalNet,totalGross,list} = this.state;
         if (invoiceNumber && issueDate && place && sellDate && sellerName && sellerTaxNo && sellerStreet && postcode && sellerCity && buyerName && buyerTaxNo && buyerStreet && buyerPostcode && buyerCity && totalTax && totalNet && totalGross) {
             list.forEach((e,i) => {
                 if (
                     e.positionAttributes === "" &&
                     e.positionQuantity === "" &&
                     e.positionUnit === "" &&
                     e.positionPriceNet === "" &&
                     e.positionTax === "" &&
                     e.positionTotalNet === "" &&
                     e.positionTotalGross === ""
                 ) {
                     list.splice(i,1);
                 }
             });
             this.saveToLocalStorage();
         }else {
             alert('wypełnij prawidłowo wszystkie pola');
         }
    };

    saveToLocalStorage = (e) => {
        let newInvoice = '';
        newInvoice = this.state;
        // get invoices from localStorage
        let invoices = localStorage.getItem('invoices');
        // if there are any invoices saved into localStorage
        if(invoices) {
            invoices = JSON.parse(invoices);
            // add new invoice
            invoices.push(newInvoice);
            localStorage.setItem('invoices', JSON.stringify(invoices));
        }
        // if adding first invoice
        else {
            localStorage.setItem('invoices', JSON.stringify([newInvoice]));
        }
        console.log(newInvoice);
        alert('Faktura zapisana poprawnie');

        this.setState({
            invoiceNumber: this.setInvoiceNumber(),
            issueDate: this.minDate,
            place: '',
            sellDate: this.minDate,
            sellerName: '',
            sellerTaxNo: '',
            sellerStreet: '',
            postcode: '',
            sellerCity: '',
            buyerName: '',
            buyerTaxNo: '',
            buyerStreet: '',
            buyerPostcode: '',
            buyerCity: '',
            list: [{
                positionAttributes: '',
                positionQuantity: '',
                positionUnit: '',
                positionPriceNet: '',
                positionTax: '',
                positionTotalNet: '',
                positionTotalGross: ''
            }],
            totalTax: 0,
            totalNet: 0,
            totalGross: 0,
        })
    };

    render(){
        return <>
            <div style={{width: '1240px', margin: 'auto'}}>
                <InvoiceHeader value={this.state} onChange={this.handleInvoiceData}/>
                <div className='sellerBuyerData'>
                    <InvoiceSeller value={this.state} onChange={this.handleInvoiceData}/>
                    <InvoiceBuyer value={this.state} onChange={this.handleInvoiceData}/>
                </div>
                <InvoicePosition value={this.state} onChange={this.handleInvoicePosition} addPosition={this.handleAddInvoicePosition}/>
                <InvoiceSaveBtn saveInvoice={this.handleSaveInvoice}/>
            </div>
        </>
    }
}

export { Invoice }

