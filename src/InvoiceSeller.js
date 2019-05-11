import React from 'react';

const InvoiceSeller = (props) => {

    const {sellerName, sellerTaxNo, sellerStreet, postcode, sellerCity} = props.value;

    const handleSellerName = () => {
        let nameMessage = document.querySelector(".sellerNameMessage");
        if (sellerName.length > 0 ) {
            nameMessage.innerHTML = '';
        }else {
            nameMessage.innerHTML = 'pole sprzedawcy nie może być puste';
        }
    };
    const handleTaxNo = () => {

        let sellerTaxNo = document.getElementById("invoice_seller_tax_no").value;
        let taxNoMessage = document.querySelector(".sellerTaxNoMessage");

        sellerTaxNo +='';
        sellerTaxNo = sellerTaxNo.replace(/[^0-9]+/g,'');
        if(sellerTaxNo.length < 10) return  taxNoMessage.innerHTML = 'nieprawidłowa ilość znaków';
        if(sellerTaxNo.length > 10) return  taxNoMessage.innerHTML = 'nieprawidłowa ilość znaków';
        let controlSum=0;
        controlSum+=parseInt(sellerTaxNo.charAt(0))*6;
        controlSum+=parseInt(sellerTaxNo.charAt(1))*5;
        controlSum+=parseInt(sellerTaxNo.charAt(2))*7;
        controlSum+=parseInt(sellerTaxNo.charAt(3))*2;
        controlSum+=parseInt(sellerTaxNo.charAt(4))*3;
        controlSum+=parseInt(sellerTaxNo.charAt(5))*4;
        controlSum+=parseInt(sellerTaxNo.charAt(6))*5;
        controlSum+=parseInt(sellerTaxNo.charAt(7))*6;
        controlSum+=parseInt(sellerTaxNo.charAt(8))*7;

        if((controlSum%11) === parseInt(sellerTaxNo.charAt(9))) {
            return taxNoMessage.innerHTML = '';
        } else {
            return taxNoMessage.innerHTML = 'wpisz prawidłowy nip';
        }
    };

    const handleSellerStreet = () => {
        let streetMessage = document.querySelector('.sellerStreetMessage');
        if(sellerStreet.length > 0) {
            streetMessage.innerHTML = '';
        } else {
            streetMessage.innerHTML = 'pole ulica i nr nie może być puste';
        }
    };

    const handleSellerPostcode = () => {

        let postcodeMessage = document.querySelector('.sellerPostcodeMessage');
        if (!postcode.match(/^\d\d-\d\d\d$/)) {
            postcodeMessage.innerHTML = 'nieprawidłowy kod';
        } else {
            postcodeMessage.innerHTML = '';
        }
    };

    const handleSellerCity = () => {
        let cityMessage = document.querySelector('.sellerCityMessage');
        if(sellerCity.length > 0) {
            cityMessage.innerHTML = '';
        } else {
            cityMessage.innerHTML = 'pole miejscowość nie może być puste';
        }
    };
        return <>
            <div className='dataDivs'>
                <label htmlFor="invoice_seller_name" style={{fontWeight: 'bold', fontSize: '20px'}}>Sprzedawca</label>
                <input className='inputs'
                       id='invoice_seller_name'
                       type="text"
                       name='sellerName'
                       value={sellerName}
                       onChange={props.onChange}
                       onBlur={handleSellerName}/>
                <div className={'sellerNameMessage'}>{}</div>
                <label htmlFor="invoice_seller_tax_no">NIP</label>
                <input className='inputs'
                       id='invoice_seller_tax_no'
                       type="text"
                       name='sellerTaxNo'
                       value={sellerTaxNo}
                       onChange={props.onChange}
                       onBlur={handleTaxNo}/>
                <div className={'sellerTaxNoMessage'}>{}</div>
                <label htmlFor="invoice_seller_street">Ulica i nr</label>
                <textarea className='inputs'
                          id='invoice_seller_street'
                          row="1" name='sellerStreet'
                          value={sellerStreet}
                          onChange={props.onChange}
                          onBlur={handleSellerStreet}/>
                <div className={'sellerStreetMessage'}>{}</div>
                <div className='divPostcodeCity'>
                    <label style={{marginRight: '15px'}} htmlFor="invoice_seller_postcode">Kod pocztowy</label>
                    <input className='inputsPostcodeCity'
                           id='invoice_seller_postcode'
                           type="text"
                           name='postcode'
                           value={postcode}
                           onChange={props.onChange}
                           onBlur={handleSellerPostcode}/>
                    <label style={{marginRight: '15px', marginLeft: '15px'}} htmlFor="invoice_seller_city">Miejscowość</label>
                    <input className='inputsPostcodeCity'
                           id='invoice_seller_city'
                           type="text"
                           name='sellerCity'
                           value={sellerCity}
                           onChange={props.onChange}
                           onBlur={handleSellerCity}/>
                </div>
                <div className={'sellerPostcodeMessage'}>{}</div>
                <div className={'sellerCityMessage'}>{}</div>
            </div>
        </>
};

export default InvoiceSeller;