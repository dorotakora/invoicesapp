import React from 'react';


const InvoiceBuyer = (props) => {

    const { buyerName, buyerTaxNo, buyerStreet, buyerPostcode, buyerCity} = props.value;

    const handleBuyerName = () => {
        let nameMessage = document.querySelector(".buyerNameMessage");
        if (buyerName.length > 0 ) {
            nameMessage.innerHTML = '';
        }else {
            nameMessage.innerHTML = 'pole odbiorcy nie może być puste';
        }
    };

    const handleTaxNo = () => {

        let buyerTaxNo = document.getElementById("invoice_buyer_tax_no").value;
        let taxNoMessage = document.querySelector(".buyerTaxNoMessage");

                buyerTaxNo +='';
                buyerTaxNo = buyerTaxNo.replace(/[^0-9]+/g,'');
                if(buyerTaxNo.length < 10) return  taxNoMessage.innerHTML = 'nieprawidłowa ilość znaków';
                if(buyerTaxNo.length > 10) return  taxNoMessage.innerHTML = 'nieprawidłowa ilość znaków';
                let controlSum=0;
                controlSum+=parseInt(buyerTaxNo.charAt(0))*6;
                controlSum+=parseInt(buyerTaxNo.charAt(1))*5;
                controlSum+=parseInt(buyerTaxNo.charAt(2))*7;
                controlSum+=parseInt(buyerTaxNo.charAt(3))*2;
                controlSum+=parseInt(buyerTaxNo.charAt(4))*3;
                controlSum+=parseInt(buyerTaxNo.charAt(5))*4;
                controlSum+=parseInt(buyerTaxNo.charAt(6))*5;
                controlSum+=parseInt(buyerTaxNo.charAt(7))*6;
                controlSum+=parseInt(buyerTaxNo.charAt(8))*7;

                if((controlSum%11) === parseInt(buyerTaxNo.charAt(9))) {
                    return taxNoMessage.innerHTML = '';
                } else {
                    return taxNoMessage.innerHTML = 'wpisz prawidłowy nip';
                }
    };

    const handleBuyerStreet = () => {
        let streetMessage = document.querySelector('.buyerStreetMessage');
        if(buyerStreet.length > 0) {
            streetMessage.innerHTML = '';
        } else {
            streetMessage.innerHTML = 'pole ulica i nr nie może być puste';
        }
    };

    const handleBuyerPostcode = () => {

        let postcodeMessage = document.querySelector('.buyerPostcodeMessage');
        if (!buyerPostcode.match(/^\d\d-\d\d\d$/)) {
            postcodeMessage.innerHTML = 'nieprawidłowy kod';
        } else {
            postcodeMessage.innerHTML = '';
        }
    };

    const handleBuyerCity = () => {
        let cityMessage = document.querySelector('.buyerCityMessage');
        if(buyerCity.length > 0) {
            cityMessage.innerHTML = '';
        } else {
            cityMessage.innerHTML = 'pole miejscowość nie może być puste';
        }
    };
        return <>
            <div className='dataDivs'>
                <label htmlFor="invoice_buyer_name" style={{fontWeight: 'bold', fontSize: '20px'}}>Nabywca</label>
                <input className='inputs'
                       id='invoice_buyer_name'
                       type="text"
                       name='buyerName'
                       value={buyerName}
                       onChange={props.onChange}
                       onBlur={handleBuyerName}/>
                <div className={'buyerNameMessage'}>{}</div>
                <label htmlFor="invoice_buyer_tax_no">NIP</label>
                <input className='inputs'
                       id='invoice_buyer_tax_no'
                       type="text"
                       name='buyerTaxNo'
                       value={buyerTaxNo}
                       onChange={props.onChange}
                       onBlur={handleTaxNo}/>
                <div className={'buyerTaxNoMessage'}>{}</div>
                <label htmlFor="invoice_buyer_street">Ulica i nr</label>
                <textarea className='inputs'
                          id='invoice_buyer_street'
                          row="1"
                          name='buyerStreet'
                          value={buyerStreet}
                          onChange={props.onChange}
                          onBlur={handleBuyerStreet}/>
                <div className={'buyerStreetMessage'}>{}</div>
                <div className='divPostcodeCity'>
                    <label style={{marginRight: '15px'}} htmlFor="invoice_buyer_postcode">Kod pocztowy</label>
                    <input className='inputsPostcodeCity'
                           id='invoice_buyer_postcode'
                           type="text"
                           name='buyerPostcode'
                           value={buyerPostcode}
                           onChange={props.onChange}
                           onBlur={handleBuyerPostcode}/>
                    <label style={{marginRight: '15px', marginLeft: '15px'}} htmlFor="invoice_buyer_city">Miejscowość</label>
                    <input className='inputsPostcodeCity'
                           id='invoice_buyer_city'
                           type="text"
                           name='buyerCity'
                           value={buyerCity}
                           onChange={props.onChange}
                           onBlur={handleBuyerCity}/>
                </div>
                <div className={'buyerPostcodeMessage'}>{}</div>
                <div className={'buyerCityMessage'}>{}</div>
            </div>
        </>

};

export default InvoiceBuyer;