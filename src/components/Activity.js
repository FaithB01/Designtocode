import React from 'react';

const activityItems = [
  {
    project: 'Workcation',
    commit: '2d89f0c8',
    environment: 'production',
    time: '1h',
  },
  {
    project: 'KiteTail',
    commit: '249df660',
    environment: 'staging',
    time: '3h',
  },
  {
    project: 'Workcation',
    commit: '11464223',
    environment: 'staging',
    time: '12h',
  },
  {
    project: 'Easywire',
    commit: 'dad28e95',
    environment: 'production',
    time: '2d',
  },
  {
    project: 'Easywire',
    commit: '624bc94c',
    environment: 'production',
    time: '5d',
  },
  {
    project: 'Workcation',
    commit: 'e111f80e',
    environment: 'production',
    time: '1w',
  },
  {
    project: 'Resumaid',
    commit: '5e136005',
    environment: 'staging',
    time: '1w',
  },
  {
    project: 'KiteTail',
    commit: '5c1fd07f',
    environment: 'production',
    time: '2w',
  },
]

const Activity = () => {
  return (
    <>
      <article className="story-quarter ">
        <div className="act">
          <h4 className="activity-feed ">Activity</h4>
        </div>
        <div>
          <ul className="aci ">
            {activityItems.map((item) => (
              <li key={item.commit} className="activity-item ">
                <div className="combine ">
                  <div className="together ">
                    <h3 className="t-name "><img src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&h=256&q=80 " width="30 " height="30 " alt=" " />
                      <div className="omg">You</div>
                    </h3>
                    <p className="time ">{item.time}</p>
                  </div>
                  <p className="statement ">Deployed {item.project} ({item.commit} in master) to {item.environment}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </article>
    </>
  );
}

export default Activity;

