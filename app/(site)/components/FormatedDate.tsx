import moment from "moment";
interface Props {
    date: string;
  }

const FormatedDate = ({date}:Props) => {
    const specificDate = moment(date);
  return (
    <span>{specificDate.format('MMM DD YYYY')}</span>
  )
}

export default FormatedDate