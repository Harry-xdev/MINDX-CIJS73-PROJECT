// khung import steps
import {useParams, useSearchParams, Link} from "react-router-dom"
import {useEffect , useState, Form} from 'react'
import './pay.css'
import { BsEmojiDizzy, BsStarFill } from "react-icons/bs";













import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



















const steps = ['Điền thông tin', 'Thanh toán', 'Hoàn tất'];

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };





  const params = useParams()
  const [searchParams, setSearchParams] = useSearchParams()
  // console.log(params)
  console.log(searchParams)
  const [selectedHotel, setSelectedHotel] = useState([])

  const handleFetchHotelListDetail = async () => {
      const response = await fetch('https://6268162901dab900f1c9969b.mockapi.io/hotelList')
      const dataHotel = await response.json();  
      const data = dataHotel.filter((item) => {
            return item.id === params.id
      })[0]
      console.log('city ' ,data)
      setSelectedHotel(data)
  
  }

  useEffect(() => {
      handleFetchHotelListDetail()
  }, [])



 const [price, setPrice] = useState(0)
 
useEffect(() => {
  
    if(searchParams.get('room')=== '1' ) {
      setPrice(selectedHotel.room1Price)
    }
    if(searchParams.get('room')=== '2' ) {
      setPrice(selectedHotel.room2Price)
    }
}, [selectedHotel,searchParams])



  const [bed, setBed] = useState(false)

  const Clicked = () => {
       setBed(!bed) 
  }

useEffect(() => {
    
  if (bed === true) {
    setPrice(Number(`${price}`.replaceAll(" ","")) + 800000)
  }
  if (bed === false) {
    setPrice(Number(`${price}`.replaceAll(" ","")) - 800000)
  }

},[bed])

console.log(price)




  return (
    <Box sx={{ width: '70%' }} className='paymentBox'>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption"></Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>Bước {activeStep + 1}
          
          </Typography>
          <div>
              {activeStep === 0 && (<div>
              
                    <div>
                    <div>
                        <div>
                            <img className='selectedHotelImg' src={selectedHotel.img1 && require(``+selectedHotel.img1+``)} />
                        </div>
                         <div className='selectedHotelName'>
                             {selectedHotel.name}
                        </div>
                        <div className='selectedHotelStar'>
                             {selectedHotel.star} <BsStarFill style={{ color: "orange" }}/>
                        </div>
                        <div className='selectedHotelAddress'>
                             {selectedHotel.addressDetail}
                        </div>
                        <div>
                             <div className='selectedHotelRoomName' >
                                  {searchParams.get('room') === '1' ? selectedHotel.room1Name : selectedHotel.room2Name }
                              </div>
                              <div>
                                   {searchParams.get('room') === '1' ? selectedHotel.room1Price : selectedHotel.room2Price }
                                </div>
                                <span>
                                    VND
                                </span> 
                         </div>
                    </div>
                    <div key={selectedHotel.id} className='payContainer'> 
                        <div>
                            <div className='payTitle'>
                                Vui lòng điền thông tin của bạn
                            </div>
                            <div className='payDetailContainer'>
                                <div className='payDetailName'>
                                Họ và tên trong hộ chiếu / CMND / CCCD
                                </div>
                               <input/>
                            </div>
                            <div  className='payDetailContainer'>
                                <div className='payDetailName'>
                                 Email
                                </div>
                               <input/>
                            </div>
                            <div  className='payDetailContainer'>
                                <div className='payDetailName'>
                                  Số điện thoại
                                </div>
                               <input/>
                            </div>
                            <div  className='payDetailContainer'>
                            <input type='checkbox' id="check" onClick={Clicked}/>
                                <div className='payDetailName'>
                                Thêm giường phụ (+ 800.000VND/ 1 giường)
                                </div>
                                
                            </div>
                            <div  className='payDetailContainer'>
                                <div className='payDetailName' >
                                Yêu cầu thêm
                                </div>
                                <input/>
                            </div>
                            <div  className='payDetailContainer'>
                                <div className='payDetailName'>
                                Tổng giá tiền
                                </div>
                                 {price}
                            </div>
                    </div>
                    
                 </div>
                 </div>
                
            
                  </div>) }
              {activeStep === 1 && ( <div>
                
                            <div> 
                                    <div  className='payDetailContainer'>
                                         <div>
                                            Hình thức thanh toán
                                         </div>
                                     <div>
                                           <div>
                                                <div>Visa</div>
                                                 <input type='radio'/>
                                            </div>
                                            <div>
                                                <div>MasterCard</div>
                                                 <input type='radio'/>
                                             </div>
                                     </div>
                                
                                    </div>
                                    <div  className='payDetailContainer'>
                                           <div>
                                                Số tài khoản / Số thẻ
                                           </div>
                                            <input/>
                                     </div>

                                </div>

                
              </div>)}
              {activeStep === 2 && 'buoc cuoi'}
          </div>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Trở về
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            {/* {isStepOptional(activeStep) && (
            //   <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
            //     Skip
            //   </Button>
            )} */}

            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? (<Link to='/'>Trở về trang chủ</Link>) : 'Bước Kế Tiếp'}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}














export const PaymentForm = () => {

    return (
        <div className='pay'>
          <img id='payImg' src={require('./back-ground img/1.jpg')}/>
          <div id='payBg'></div>
          <div className='pay' id='pay'>
            
          <HorizontalLinearStepper />
          </div>
          {/* Step 2 */}
            {/* <div>
            <div  className='payDetailContainer'>
                                <div>
                                Loại thẻ
                                </div>
                                <div>
                                    <div>
                                       <div>Visa</div>
                                       <input type='radio'/>
                                    </div>
                                    <div>
                                       <div>MasterCard</div>
                                       <input type='radio'/>
                                    </div>
                                </div>
                                
                            </div>
            <div  className='payDetailContainer'>
                                <div>
                                 Số tài khoản / Số thẻ
                                </div>
                                <input/>
                            </div>
            </div> */}
        </div>
    )
}

