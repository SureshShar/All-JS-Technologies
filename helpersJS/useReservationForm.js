export function useReservationForm() {
  const formData = ref({
    name: '',
    surname: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    adults: '',
    children: '',
    childrenAge: '',
    hotelName: ''
  });
  
  const mail = useMail();

  const submitForm = async (props) => {
    try {
      await mail.send({
        from: 'Hotel Booking',
        subject: `Hotel Booking Detail:- ${props.hotelDetails?.HotelInfo?.HotelName}`,
        html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
            <style>
                .title, .subject {
                    width: 300px;
                    padding: 8px 0;
                    color: #616161;
                    font-family: Roboto, Helvetica, sans-serif;
                    font-weight: 400;
                    font-size: 12px;
                    line-height: 14px;
                }

                table.center {
                    margin: 0 auto;
                    width: 602px;
                }

                .subject {
                    text-align: right;
                }

                tr {
                    display: table-row;
                    vertical-align: inherit;
                    unicode-bidi: isolate;
                    border-color: inherit;
                }

                a {
                    text-decoration: none;
                    color: #616161;
                }
            </style>
        </head>
        <body>
            <center class="wrapper">
                <table class="top-panel center" style="text-align:left;width: 100%;  max-width:602px;" border="0" cellspacing="0" cellpadding="0">
                    <tbody>
                    <tr>
                        <td class="title" width="300">Hotel Booking</td>
                        <td class="subject" width="300"></td>
                    </tr>
                    <tr>
                        <td  colspan="2" style="border-top: 1px solid black;">&nbsp;</td>
                    </tr>
                    </tbody>
                </table>
                <table class="main" style="text-align:left;width: 100%;  max-width:602px; background-color:#f8f8f8;border-radius:3px;font-family:helvetica;" cellpadding="10">
                    <tr>
                    <td colspan="2" style="text-align:center;font-weight: bold; font-size: 20px; color: #2071b3;padding-top:30px; padding-bottom: 10px;" align="center">Contact Detail</td>
                    </tr>
                    <tr>
                    <th width='150px'>Name</th>
                    <td>${formData.value.name} ${formData.value.surname}</td>
                    </tr>

                    <tr>
                    <th>Hotel Name</th>
                    <td>${props.hotelDetails?.HotelInfo?.HotelName}</td>
                    </tr>

                    <tr>
                    <th>Room Name</th>
                    <td>${props.modalRoomDetail?.RoomDescription?.Name}</td>
                    </tr>

                    <tr>
                    <th>Room Price</th>
                    <td>${props.modalRoomDetail?.RatePlans?.RatePlan[0]?.ConvertedRateInfo?.AmountAfterTax}</td>
                    </tr>
                    
                    <tr>
                    <th>Booking Date</th>
                    <td>${props.parameterValue?.startDate} / ${props.parameterValue?.endDate}</td>
                    </tr>
                    
                    <tr>
                    <th>Email</th>
                    <td>${formData.value.email}</td>
                    </tr>

                    <tr>
                    <th>Phone Number</th>
                    <td>${formData.value.phone}</td>
                    </tr>
                    <tr>
                    <th>Message</th>
                    <td>${formData.value.message}</td>
                    </tr>
                    <tr>
                    <th>Adults</th>
                    <td>${props?.parameterValue?.adults}</td>
                    </tr>
                    <tr>
                    <th>Children</th>
                    <td>${props?.parameterValue?.children}</td>
                    </tr>
                    <tr>
                    <th>Children Age</th>
                    <td>${props?.parameterValue?.childrenAge}</td>
                    </tr>
                    <tr>
                        <td colspan="2" style="text-align:center;font-weight: bold; font-size: 20px; color: #2071b3;padding-top:30px; padding-bottom: 10px;" align="center"></td>
                    </tr>
                </table>
                <div class="spacer">&nbsp;</div>
            </center>
        </body>
        </html>`,
      });

      // Reset form data
      formData.value = {
        name: '',
        surname: '',
        email: '',
        message: '',
        phone: ''
      };

      return { success: true, message: 'Email sent successfully' };
      
    } catch (error) {
      console.error('Failed to send email:', error);

      return { success: false, message: 'Failed to send email', error: error.message };
    }
  };

  return {
    formData,
    submitForm
  };
}

/**
 * How to use isTimeStampValid
 * const { formData, submitForm } = useReservationForm();
 */