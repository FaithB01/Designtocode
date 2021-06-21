import React from 'react';


const ActivitItems = ({ project, commit, environment, time }) => {
  return (
    <>
      <ul className="aci ">
        <li className="activity-item ">
          <div className="combine ">
            <div className="together ">
              <h3 className="t-name "><img src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&h=256&q=80 " width="30 " height="30 " alt=" " />
                <div className="omg">You</div>
              </h3>
              <p className="time ">{time}</p>
            </div>
            <p className="statement ">Deployed {project} ({commit} in master) to {environment}</p>
          </div>
        </li>
      </ul>
    </>
  );
}

export default ActivitItems;
