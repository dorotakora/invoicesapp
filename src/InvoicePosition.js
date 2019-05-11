import React from "react";


const InvoicePosition = (props) => {

    const {list, totalTax, totalNet, totalGross} = props.value;

    const handleSubmit = (e) => {e.preventDefault()};

    const handlePosition = () => {
        let positionMessage = document.querySelector(".positionMessage");
        list.forEach(e => {
            if (e.positionAttributes.length > 0) {
                positionMessage.innerHTML = '';
            }else {
                positionMessage.innerHTML = 'wprowadź nazwę';
            }
        })
    };

    const handleQuantity = () => {
        let quantityMessage = document.querySelector(".quantityMessage");
        list.forEach(e => {
            if (e.positionQuantity.length > 0) {
                quantityMessage.innerHTML = '';
            }else {
                quantityMessage.innerHTML = 'wprowadź ilość';
            }
        })
    };

    const handleUnit = () => {
        let unitMessage = document.querySelector(".unitMessage");
        list.forEach(e => {
            if (e.positionUnit.length > 0) {
                unitMessage.innerHTML = '';
            }else {
                unitMessage.innerHTML = 'wprowadź jednostkę';
            }
        })
    };

    const handlePriceNet = () => {
        let priceNetMessage = document.querySelector(".priceNetMessage");
        list.forEach(e => {
            if (e.positionPriceNet.length > 0) {
                priceNetMessage.innerHTML = '';
            }else {
                priceNetMessage.innerHTML = 'wprowadź cenę';
            }
        })
    };

    const handleTax = () => {
        let taxMessage = document.querySelector(".taxMessage");
        list.forEach(e => {
            if (e.positionUnit.length > 0) {
                taxMessage.innerHTML = '';
            }else {
                taxMessage.innerHTML = 'wybierz stawkę';
            }
        })
    };

    const deletePosition = (e) => {
        let form = document.querySelector('.invoicePosition');
        let position = document.querySelector('.positionDiv');
        if (position.positionAttributes === e.positionAttributes ) {
            form.removeChild(position);
        }
    };

    return (
        <form className='invoicePosition' onSubmit={handleSubmit}>
            { list.map((val, idx) => {
                let positionAttrId = `positionAttributes-${idx}`;
                let positionQuantId = `positionQuantity-${idx}`;
                let positionUnitId =  `positionUnit-${idx}`;
                let positionPriceNetId =  `positionPriceNet-${idx}`;
                let positionTaxId =  `positionTax-${idx}`;
                let positionTotalNetId =  `positionTotalNet-${idx}`;
                let positionTotalGrossId =  `positionTotalGross-${idx}`;

                return (
                    <div key={idx} className={'positionDiv'}>
                        <label htmlFor={positionAttrId}>{`${idx + 1}) Nazwa`}</label>
                        <input type="text"
                               name={positionAttrId}
                               id={idx}
                               value={list[idx].positionAttributes}
                               className='positionAttributes'
                               onChange={props.onChange}
                                onBlur={handlePosition}/>
                        <label htmlFor={positionQuantId}>Ilość</label>
                        <input type="number"
                               min={0}
                               name={positionQuantId}
                               id={idx}
                               value={list[idx].positionQuantity}
                               className='positionQuantity'
                               onChange={props.onChange}
                                onBlur={handleQuantity}/>
                        <label htmlFor={positionUnitId}>Jednostka</label>
                        <input type="text"
                               name={positionUnitId}
                               id={idx}
                               value={list[idx].positionUnit}
                               className='positionUnit'
                               onChange={props.onChange}
                               onBlur={handleUnit}/>
                        <label htmlFor={positionPriceNetId}>Cena netto</label>
                        <input type="number"
                               min={0}
                               name={positionPriceNetId}
                               id={idx}
                               value={list[idx].positionPriceNet}
                               className='positionPriceNet'
                               onChange={props.onChange}
                                onBlur={handlePriceNet}/>
                        <label htmlFor={positionTaxId}>VAT %</label>
                        <select name={positionTaxId}
                                id={idx}
                                value={list[idx].positionTax}
                                className='positionTax'
                                onChange={props.onChange}
                                onBlur={handleTax}>
                            <option value="0">--</option>
                            <option value="0.23">23</option>
                            <option value="0.08">8</option>
                            <option value="0.07">7</option>
                            <option value="0.05">5</option>
                            <option value="0">0</option>
                        </select>
                        <label htmlFor={positionTotalNetId}>Wartość netto</label>
                        <input type="text"
                               name={positionTotalNetId}
                               id={idx}
                               value={list[idx].positionTotalNet}
                               className='positionTotalNet'
                               onChange={props.onChange}/>
                        <label htmlFor={positionTotalGrossId}>Wartość brutto</label>
                        <input type="text"
                               name={positionTotalGrossId}
                               id={idx}
                               value={list[idx].positionTotalGross}
                               className='positionTotalGross'
                               onChange={props.onChange}/>
                        <button className={'deletePosition'} onClick={deletePosition} type="button">X</button>
                    </div>
                )
            })
            }
            <div className={"positionMessage"}>{}</div>
            <div className={'quantityMessage'}>{}</div>
            <div className={'unitMessage'}>{}</div>
            <div className={'priceNetMessage'}>{}</div>
            <div className={'taxMessage'}>{}</div>
            <button onClick={props.addPosition} className='addPositionBtn'>Dodaj pozycję</button>
            <div className='sumOfInvoice'>
                <span>Suma VAT: {totalTax} </span>
                <span>Suma netto: {totalNet} </span>
                <span>Suma brutto: {totalGross} </span>
            </div>


        </form>
    )
};
export default InvoicePosition;