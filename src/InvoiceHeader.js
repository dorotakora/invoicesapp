import React from 'react';

const InvoiceHeader = (props) => {
    console.log(props.value);
    let {invoiceNumber, issueDate, place, sellDate} = props.value;

    return <>
        <div className='containerInvoice'>
            <label htmlFor="invoice_number">Numer faktury</label>
            <input className='inputs'
                   id='invoice_number'
                   type="text"
                   name='invoiceNumber'
                   value={invoiceNumber}
                   onChange={props.onChange}
                   readOnly
                   />
            <label htmlFor="invoice_issue_date">Data wystawienia</label>
            <input className='inputs'
                   id="invoice_issue_date"
                   type="date" name='issueDate'
                   value={issueDate}
                   onChange={props.onChange}/>
            <label htmlFor="invoice_place">Miejsce wystawienia</label>
            <input className='inputs'
                   id="invoice_place"
                   type="text"
                   name='place'
                   value={place}
                   onChange={props.onChange}/>
            <label htmlFor="invoice_sell_date">Data sprzedaży</label>
            <input className='inputs'
                   id="invoice_sell_date"
                   type="date"
                   name='sellDate'
                   value={sellDate}
                   onChange={props.onChange}/>
        </div>
    </>
};

export default InvoiceHeader;