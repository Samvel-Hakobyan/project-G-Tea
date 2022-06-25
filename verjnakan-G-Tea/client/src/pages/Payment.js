import React from 'react';
import {Link} from "react-router-dom"
import {useSelector} from "react-redux";
import {BiSupport} from 'react-icons/bi'
import {useForm} from "react-hook-form";

function Payment(props) {
    const cart = useSelector((state)=> state.cart);
    const {register,
        formState:{errors},
        handleSubmit,
    } = useForm();

    console.log("errors", errors)
    function makeid(length) {
        let result           = '';
        let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let charactersLength = characters.length;
        for ( let i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() *
                charactersLength));
        }
        return result;
    }

    return (
        <div>
                         <div className="container">
                             <div>
                                 <div className="align-center">
                             <div className="container bg-light d-md-flex align-items-center">
                                     <div className="card box1 shadow-sm p-md-5 p-md-5 p-4">
                                         <div className="d-flex flex-column">
                                             <div className="d-flex align-items-center justify-content-between text mb-4"><span>Price:</span>
                                                 <span className="fas fa-dollar-sign">
                                                     <span className="ps-1">${cart.cartTotalAmount}</span>
                                                 </span></div>
                                             <div className="d-flex align-items-center justify-content-between text mb-4"><span>Shipping Price:</span>
                                                 <span className="fas fa-dollar-sign">
                                                     <span className="ps-1">$170</span>
                                                 </span></div>
                                             <div className="d-flex align-items-center justify-content-between text mb-4"><span>Total Price:</span>
                                                 <span className="fas fa-dollar-sign">
                                                     <span className="ps-1">${cart.cartTotalAmount + 170}</span>
                                                 </span></div>
                                             <div className="border-bottom mb-4"></div>
                                             <div className="d-flex flex-column mb-4"><span className="far fa-file-alt text"><span
                                                 className="ps-2">Invoice ID:</span></span>
                                                 <span className="ps-3">{makeid(13)}</span></div>
                                         </div>
                                     </div>
                                     <div className="card box2 shadow-sm">
                                         <div className="d-flex align-items-center justify-content-between p-md-5 p-4"><span
                                             className="h5 fw-bold m-0">Payment</span>
                                         </div>
                                         <div className="paymentMethods">
                                             <img className="methodsP" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAAgCAMAAABq4atUAAAAhFBMVEX3nhvrABv/////XwD+7/D958XsDyj5tlT82qn/+fDwP1P+8+L+awXyIxD7zozwFxT5r7f1f4zyX2/uL0X9bwb+7dT3pCn93+L3mRn6hhD+WQH81Jr5vGHtHzb4r0X94Lf7z9T1Lw35QQj8egv0b376v8X2kJv2X0P6wnD5ihL4bE74nyWXYNIuAAABPklEQVQ4jZ2V61KDMBCFFwIkBEWgAloubZXWqu//fnInJSd2yvnFZPLNHnaTE7IXRYncWVYlm2heSouSE2WcF4GykaaPPLEWebHTrR1aYFYt1pATW7fyLnagIp24ewPlO0vT1y9pEgp09HTmmT296dR1hhzIMEiFI+QAby+s06sO0WGA1j3otO8h9q5Dmd9BOTB3GhiTQbITnZkK4VJBCxm6MJYCf1XYFIFCHzPEgD9uE3K3MMgf+SRN/R70CSCXjENixlG5BNzdg8ItULHN3qZGNMDffoFwyx8fbrnxGD1+YP0WQvf29E+h8N4l/IaF+owwjgr2OxVDsFS4F+jeiiXCIGUMozEsUSD96GGZqWHZKl710ItALKfrB8BJFKy69A+AWypIPSW5ArU6N1J6npTxeV4KxJXXVPNS+MrGP15ME2pz0EKIAAAAAElFTkSuQmCC" alt="MasterCard"/>
                                             <img className="methodsP" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAABDCAMAAACRDGoDAAAAh1BMVEX///8UNMsALcoAHMjCx+4AIslga9YAK8oQMssAJskAGMgAKMkAEscAAMYAH8ivtej29/36+/7w8vtyftro6vnM0PG+w+0ACsZaZ9V/iN1pddimrOZuetng4/erseg6TM8uQ85IWNKepOSJkd9FU9HU2PM3R85lcNcgOs1TYNSOluCVnuK4vOsINY0rAAAEs0lEQVRYhe1YyYKiMBCFRCRhB0FEpd1tF/7/+wZIVRaWOcx1eKdOSFLbq8W2rAULFixYsOC/RrZdGSiSwYEcD2zbL6k8px8prsfL6Xm6/96afPh+jbczc7/wwjCgCl54Mw/8luJDcO9eCeHUSz1wDDzuEsYYIb4T2pWueHaBCzT8GSiU5j+7yCG2hGcIzjzc7kyMI7FwKzTn7bm2Dhbqck8+7ruboSdaJPE7kNdZpDvr6sAu61YVnIpi8fVQEtsEuWiXG0/us+eE3E7xNZUG68E7M7HpXLvVE1Zl3X/8ePYQfqVdviitGBkEeGSZzb9qswBtmN9fC9H4tFvFwUisHTXq8kNXiz5m5Fp30I78qr0jONY96g+RXbfKHCa9y6PI4W67jmp1eaOH3jnMyf3BUBK5laBFZa/tAU7wT7eqOPrQ232bbfzdnwOu7lpJqDtCaD6FvIQjipIoiJ365R4MoB0DUgLmkjPamNa3t3pPBk48MUMsS3HIK3AHeUQFf09Iso7xDxn6UbEwnkP1yjliyXhwDIV82u55lEP2ipzCXJ4zZCXIQN4gX1kzRINVAUOBiviilBRIq5540o3ONFN3gqZRcRFy9TQxIe25i3WKeVAKT36BSLzPZYy9zfiU4FxQkjlYbEQSTOIlNMMcx5fxxhsSLeg9tpKFhgXVsJtY1k2UyLaiNuIZ9hqdQWAZDIQBSCMKBQzNp71aCZfpa3N36MTEZvhUDXni1NYMtmCC0zcPyaqz+FoHZhhuWp4wx46Npxqq7kJ9ods5udh8RJHdQDMRpdlCf6nWctabAqMXPZ/AV32FAYaJajMJKOS9RZJVHgSvQj3Qstw2eiChKlOwogadbz/coMkEgAx22f4dg3k+mofdJZL0zS6UaYJZIAVDXRe5DQxsqT2HVaTUxDaBjSRjwPZIu3ClusmMgquxZYhmkAMDy1liJRGcbySrZCN/DGgFEo5Ui7K/B3XAVzBCQMWKTOrpuIsT/kdG08OGiu3KHwxg9TtQzg5E5kMSYUShn7iVNYevpIAHXmX4CYsmbYaXVkSaLD5iuKKtobLpKQPgTHaKjVar2WAH4/aTYYWBIgyJ0xb6TY81pAmbbUkJdq0zkgilZBjeczq+luN80KspVzZxe6A7vNlZR6qKPX2NH3DSUjs6gOuiZdzk9DqAMxyiFa7cOKkyUjYjUYlNj2U4qnS1MPWZPY2/EOtB9YMw33RYY9UQTeK91tp4ip2qHypwIBjjL7OOFenKqiEwlUOQsJS4lFVNnaRpUh8IFo8+ce7DWV4hnODGwK5eP0f2VeQK5FU3AzI3Kil7uaWaZ7uR/4E+9x2F0eQ2wkHrbtrwD30NZyAciVo9NP/wrlzh0MmrWKKBiYJfZ+XW2o+AQBVU5Ch4vpqirPtMVWlmXKceVqz9rFwZSLNxYdAGo4iO6N5F5eqML0sv4ggxhb3sMPpvHaAbc/uIZ3wol7nwwxk8alxWTYXPzNotYo8IuES/J/Z80Z2yo+1xwpRQyo/ixW0Jt03qprBdGv8oMJC/1wI7rbqsYHOH81tSfHYkLL32t38Zvo4NBrPawcFB19qM3/x3JHWxWhX1fFIuWLBgwYIFC0b4A9I/RnqlnPbWAAAAAElFTkSuQmCC" alt="Visa"/>
                                             <img className="methodsP" src="data:image/png;base64,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" alt="AmericanExpress"/>
                                             <img className="methodsP" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_ve8_KACP1ZUWidPKzcMGkMsJ_-QAf6FEfo-A8P0&usqp=CAE&s" alt="Discover"/>
                                         </div>
                             <form autoComplete="on"
                            onSubmit={handleSubmit((data)=>
                                window.location.href = '/thanks'
                             )} className={'payment-form'}>
                                             <input {...register("CardNumber", {
                                                     required: "Card Number is required",
                                                     pattern: {
                                                     value: /^(?:4[0-9]{12}(?:[0-9]{3})?|(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|6(?:011|5[0-9]{2})[0-9]{12}|(?:2131|1800|35\d{3})\d{11})$/,
                                                     message: "Card Number is inValid"
                                                     },
                                                 })}

                                                 type="tel"
                                                 // name="number"
                                                 placeholder="Card Number"
                                             />
                                             <p className={'error'}>{errors.CardNumber?.message}</p>

                                             <input {...register("CardHolder", {
                                                 required: "Card Holder is required",
                                                 pattern: {
                                                     value: /^((?:[A-Z]+ ?){1,3})$/,
                                                     message: "Card Holder is inValid"
                                                 },
                                             })}
                                                 type="tel"
                                                 // name="name"
                                                 placeholder="CARD HOLDER"
                                            />
                                             <p className={'error'}>{errors.CardHolder?.message}</p>
                                            <input {...register("Expiry", {
                                                required: "Expiry is required",
                                                pattern: {
                                                    value: /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/,
                                                    message: "Expiry is inValid"
                                                },
                                            })}
                                                type="tel"
                                                // name="expiry"
                                                placeholder="expiry"
                                            />
                                             <p className={'error'}>{errors.Expiry?.message}</p>
                                            <input {...register("Cvv", {
                                                required: "Cvv is required",
                                                pattern: {
                                                    value: /^[0-9]{3,4}$/,
                                                    message: "Cvv is inValid"
                                                },
                                            })}
                                                type="tel"
                                                // name="cvc"
                                                placeholder="cvc"
                                            />
                                             <p className={'error'}>{errors.Cvv?.message}</p>

                                             <div className="buttonPay">
                                            <button type="submit" className="btn btn-primary w-100">Pay ${cart.cartTotalAmount}</button>
                                        </div>
                                         </form>

                                     </div>
                                </div>
                                 </div>
                            </div>
                        </div>
        </div>
    );
}

export default Payment;