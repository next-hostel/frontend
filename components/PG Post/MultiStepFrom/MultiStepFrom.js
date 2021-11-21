
import { useForm, useStep } from "react-hooks-helper";
import Step1 from '../Step1/Step1'
import Step2 from '../Step2/Step2'
import Step3 from '../Step3/Step3'
import Step4 from '../Step4/Step4'
import Step5 from '../Step5/Step5'
import Step6 from '../Step6/Step6'
import Step7 from '../Step7/Step7'
import Step8 from '../Step8/Step8'
import Step10 from '../Step10/Step10'

const defaultData = { 
  location: '',
  address: '',
  pincode: '',
  landmark: '',
  startTime: '',
  pgName: '',
  owner: '',
  airCooler: '',
  noOfBed: '',
  rent: '',
  security: '',
  Geyser: '',
  Washrooms: '',
  cupboard: '',
  tv: '',
  ac: '',
  cot: '',
  mattress: '',
  sideTable: '',
  gender: '',
  student: '',
  vegOnly: '',
  noSmoking: '',
  bearveg: '',
  oppoSexAllow: '',
  ParentsAllowed: '',
  noticePeriod: '',
  time: '',
  laundry: '',
  roomCleaning: '',
  warden: '',
  breakfast: '',
  lunch: '',
  dinner: '',
  vegNonVeg: '',
  food_charge: '',
  pg_location:'',
}



const steps = [
  { id: 'step1' },
  { id: 'step2' },
  { id: 'step3' },
  { id: 'step4' },
  { id: 'step5' },
  { id: 'step6' },
  { id: 'step7' },
  { id: 'step8' },
  { id: 'step10' },
]




const MultiStepFrom = () => {

  const [formData, setForm] = useForm(defaultData);
  const { step, navigation } = useStep({
    steps,
    initialStep: 0
  })

  const props = { formData, setForm, navigation }

  switch (step.id) {
    case 'step1': return <Step1 {...props} />;
    case 'step2': return <Step2 {...props} />;
    case 'step3': return <Step3 {...props} />;
    case 'step4': return <Step4 {...props} />;
    case 'step5': return <Step5 {...props} />;
    case 'step6': return <Step6 {...props} />;
    case 'step7': return <Step7 {...props} />;
    case 'step8': return <Step8 {...props} />;
    case 'step10': return <Step10 {...props} />;

  }

  console.log(setForm);


  return (
    <>
      <h1></h1>


    </>
  )
}

export default MultiStepFrom
