import { Battery, BarChart, Wifi } from 'react-feather';
import './phoneInfo.scss';

function PhoneInfo() {
  const current = new Date;
  const currentHour = current.getHours() + ':' + current.getMinutes()
  return (
    <div className="phone_info">
      <p className='phone_hour'>{currentHour}</p>
      <div className="phone_info-icons">
        <BarChart/>
        <Wifi/>
        <Battery/>
      </div>
    </div>
  );
}

// == Export
export default PhoneInfo;
