import React from "react";
import './contactus.css';


export default function ContactUsPage(props){
 
    let [submitResponse ,setSubmitResponse] = React.useState();

    function getInputData(formId){
        let form = document.getElementById(formId);
        let formData = {};
        for(let each of form.elements){
            if(each.tagName === "INPUT"){
                if(!each.value) return null;
                if(each.type === 'text'){
                    //perfrom proper validation for the email, texts and numbers as required.
                }
                formData[each.placeholder] = each.value
            }
        }
        // console.log("this is form data", formData);
        return formData
    }

    
     function handleSubmit(event, url, formDatas){
        event.preventDefault();
        console.log(event, url, formDatas)// fetch should only run if formdatas exist as per requirement.
        // if(formDatas){
        //     fetch(url, {
        //         method : "POST",
        //         body : JSON.stringify(formDatas)
        //     })
        //     .then(res => { 
        //         if(res){
        //             console.log("mail sent");
        //             setSubmitResponse('mail sent')
        //             return res.json()
        //         }
        //         return
        //     })
        //     .catch(err => {
        //         console.log("couldnt send the mail");
        //         setSubmitResponse('couldnt send the mail')
        //     })
        // }
        // else{
        //     console.log('invalid input');
        //     setSubmitResponse('invalid input')
        // }
    }

    return (
        <>
          <div className="contactuspage-top">
            <div className="contactuspage-container">
                <div className="contactuspage-bg"></div>
                <div className="contactuspage-data-container">
                    <div className="contactuspage-head">Join Developer Preview</div>
                    <form className="contactuspage-form-one" id="form1">
                        <input minLength={5} placeholder="Name" type="text"/> 
                        <input placeholder="Email" type="email"/>
                        <button type="submit" onClick={e => handleSubmit(e, '/some_url', getInputData('form1'))}>Send</button>
                        {/* <div>{submitResponse}</div> To give confirmation message after sending mail */}
                    </form>
                </div>
            </div>
          </div>
        </>
    )
}