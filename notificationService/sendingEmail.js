/**
 * This file will contain the sample logic to send email
 */
const nodemailer = require("nodemailer");

/**
 * We need to configure the transporter for sending email
 */
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: "kricha000@gmail.com", // generated ethereal user
    pass: "", // generated ethereal password
  },
});

/**
 * write a code for send mail
 */
const mailObject = {
  from: "crm-no-reply@gmail.com", // sender address
  to: "kricha000@gmail.com", // list of receivers
  subject: "Offer for Collaboration", // Subject line
  text: "hello", // plain text body
  html: `<!DOCTYPE html>
    <body>
    <tr>
        <td align="center" valign="top">
            <table width="556" border="0" cellspacing="0" cellpadding="0" align="center"
                class="m_-8417353500393176574em_wrapper" style="width:556px">
                <tbody>
                    <tr>
                        <td align="center" valign="top" width="55" style="width:55px">
                            &nbsp;</td>
                        <td align="center" valign="top">
                            <table width="100%" border="0" cellspacing="0" cellpadding="0" align="center">
                                <tbody>
                                    <h1 style="font-family:'Graphik Web',Helvetica,Arial,sans-serif;color:#f7962c">user related feedback by shhh</h1>
                                </tbody>
                            </table>
                        </td>
                        <td align="center" valign="top" width="55" style="width:55px">
                            &nbsp;</td>
                    </tr>
                </tbody>
            </table>
        </td>
    </tr>
    <tr>
        <td align="center" valign="top">
            <table width="556" border="0" cellspacing="0" cellpadding="0" align="center"
                class="m_-8417353500393176574em_wrapper" style="width:556px">
                <tbody>
                    <tr>
                        <td align="center" valign="top" width="55" style="width:55px">
                            &nbsp;</td>
                        <td align="center" valign="top">
                            <table width="100%" border="0" cellspacing="0" cellpadding="0" align="center">
                                <tbody>
                                    <tr>
                                        <td align="left" class="m_-8417353500393176574em_defaultlink" valign="top"
                                            style="font-family:'Graphik Web',Helvetica,Arial,sans-serif;font-size:16px;line-height:22px;color:#000000">
                                            <div style="width:100%; display:flex "> 
                                            <div style='marging-top:15px;'>hhf </div>   
                                            <div style='text-align:right ; margin-left:72%'>
                                            <span>&#11088;</span>
                                            </div> ✌️
                                        </div> 
                                            <hr>
                                            <span id="res" style="font-size:14px;color:#363636">
                                          hello  
                                            </span>
    
                                            <br><br>
                                            <span style="font-size:14px;color:#363636">
                                                This email was sent because you created account at</span> 
                                                <br>
                                                <br>
                                                <span style="font-size:14px;color:#363636">
                                                  Thankyou for sending  ,you are most welcome
                                            
                                             </span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                        <td align="center" valign="top" width="55" style="width:55px">
                            &nbsp;</td>
                    </tr>
                </tbody>
            </table>
        </td>
    </tr>
    </body>
    </html>`,
};

//   console.log("Message sent: %s", info.messageId);
//   // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

//   // Preview only available when sending through an Ethereal account
//   console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
//   // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

transporter.sendMail(mailObject, (error, data) => {
  if (error) {
    console.log(error.message);
  } else {
    console.log("Email was send successFully");
  }
});

// main().catch(console.error);
