import React from 'react';
import ReactStars from "react-rating-stars-component";

const Row = () => {
  return (
    <div>
      <section className="row">
        <article className="story quarter">
          <div className="details">
            <div className="profile">
              <img className="photo" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&h=256&q=80" width="70 " height="70 " alt=" " />
              <div className="name ">
                <div className="name-1 ">Debbie Lewis</div>
                <span>
                  <div className="repo">
                    <svg className="another " xmlns="http://www.w3.org/2000/svg " width="20 " height="20 ">
                      <path fill-rule="evenodd " clip-rule="evenodd " d="M8.99917 0C4.02996 0 0 4.02545 0 8.99143C0 12.9639 2.57853 16.3336 6.15489 17.5225C6.60518 17.6053 6.76927 17.3277 6.76927 17.0892C6.76927 16.8762 6.76153 16.3104 6.75711 15.5603C4.25372 16.1034
                    3.72553 14.3548 3.72553 14.3548C3.31612 13.316 2.72605 13.0395 2.72605 13.0395C1.9089 12.482 2.78793 12.4931 2.78793 12.4931C3.69127 12.5565 4.16643 13.4198 4.16643 13.4198C4.96921 14.7936 6.27312 14.3968 6.78584 14.1666C6.86761 13.5859
                    7.10022 13.1896 7.35713 12.965C5.35873 12.7381 3.25756 11.9665 3.25756 8.52116C3.25756 7.53978 3.6084 6.73667 4.18411 6.10854C4.09129 5.88114 3.78244 4.96654 4.27251 3.72904C4.27251 3.72904 5.02778 3.48728 6.74717 4.65082C7.46487 4.45101
                    8.23506 4.35165 9.00028 4.34779C9.76494 4.35165 10.5346 4.45101 11.2534 4.65082C12.9717 3.48728 13.7258 3.72904 13.7258 3.72904C14.217 4.96654 13.9082 5.88114 13.8159 6.10854C14.3927 6.73667 14.7408 7.53978 14.7408 8.52116C14.7408 11.9753
                    12.6363 12.7354 10.6318 12.9578C10.9545 13.2355 11.2423 13.7841 11.2423 14.6231C11.2423 15.8247 11.2313 16.7945 11.2313 17.0892C11.2313 17.3299 11.3937 17.6097 11.8501 17.522C15.4237 16.3303 18 12.9628 18 8.99143C18 4.02545 13.97 0 8.99917
                    0Z " fill="currentcolor " />
                    </svg> <div className="dee">debbielewis</div></div>
                </span>

              </div>
            </div>
            <div className="screen-button ">
              <button type="button" className="screen-button " >
                New Project
              </button>
              <button className="screen-button ">Invite team</button>
            </div>
            <div className="badge ">
              <div className="badge1">
                <svg xmlns="http://www.w3.org/2000/svg " width="20 " height="20 " viewBox="0 0 20 20 " fill="currentColor ">
                  <path fill-rule="evenodd " d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812
                    2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1
                    1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z " clip-rule="evenodd " />
                </svg>
                <span className="pro">Pro Member</span>
              </div>
              <div className="badge2">

                <svg xmlns="http://www.w3.org/2000/svg " width="20 " height="20 " viewBox="0 0 20 20 " fill="currentColor ">
                  <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z " />
                </svg>
                <span className="pro">8 Projects</span>
              </div>
            </div>
          </div>
        </article>
        <article className="story half ">
          <div className="overview ">
            <div className="projects ">
              <h2 className="hed ">Projects</h2>
              <span>
                <button id="sort-menu " type="button " className="buttons " >

                  <svg className="corn" xmlns="http://www.w3.org/2000/svg " width="30 " height="20 ">
                    <path d="M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h5a1 1 0 000-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM13 16a1 1 0 102 0v-5.586l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 101.414 1.414L13 10.414V16z " />
                  </svg>
                  <div className="sm">Sort</div>

                  <svg className="corn" xmlns="http://www.w3.org/2000/svg " width="30 " height="20 ">
                    <path fill-rule="evenodd " d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z " clip-rule="evenodd " />
                  </svg>
                </button>
              </span>
            </div>
            <li className="Workcation ">
              <div className="flex items-center justify-between space-x-4 ">
                <div className="min- ">
                  <div className="rightside">
                    <span className="block ">
                      <h3 className="hedi "><span aria-label="Running" className="green">
                        <div className="lightgreen"></div>
                      </span>

                        <div className="fey">Workcation</div>
                      </h3>
                    </span>
                  </div>
                  <div className="git">
                    <svg className="another " xmlns="http://www.w3.org/2000/svg " width="30 " height="20 ">
                      <path fill-rule="evenodd " clip-rule="evenodd " d="M8.99917 0C4.02996 0 0 4.02545 0 8.99143C0 12.9639 2.57853 16.3336 6.15489 17.5225C6.60518 17.6053 6.76927 17.3277 6.76927 17.0892C6.76927 16.8762 6.76153 16.3104 6.75711 15.5603C4.25372
                    16.1034 3.72553 14.3548 3.72553 14.3548C3.31612 13.316 2.72605 13.0395 2.72605 13.0395C1.9089 12.482 2.78793 12.4931 2.78793 12.4931C3.69127 12.5565 4.16643 13.4198 4.16643 13.4198C4.96921 14.7936 6.27312 14.3968 6.78584 14.1666C6.86761
                    13.5859 7.10022 13.1896 7.35713 12.965C5.35873 12.7381 3.25756 11.9665 3.25756 8.52116C3.25756 7.53978 3.6084 6.73667 4.18411 6.10854C4.09129 5.88114 3.78244 4.96654 4.27251 3.72904C4.27251 3.72904 5.02778 3.48728 6.74717 4.65082C7.46487
                    4.45101 8.23506 4.35165 9.00028 4.34779C9.76494 4.35165 10.5346 4.45101 11.2534 4.65082C12.9717 3.48728 13.7258 3.72904 13.7258 3.72904C14.217 4.96654 13.9082 5.88114 13.8159 6.10854C14.3927 6.73667 14.7408 7.53978 14.7408 8.52116C14.7408
                    11.9753 12.6363 12.7354 10.6318 12.9578C10.9545 13.2355 11.2423 13.7841 11.2423 14.6231C11.2423 15.8247 11.2313 16.7945 11.2313 17.0892C11.2313 17.3299 11.3937 17.6097 11.8501 17.522C15.4237 16.3303 18 12.9628 18 8.99143C18 4.02545 13.97
                    0 8.99917 0Z " fill="currentcolor " />
                    </svg>debbielewis/workcation
                  </div>
                </div>
              </div>

              <div className="meta ">
                <p className="site ">
                  <span> Visit site
                    <span style={{ fontSize: "150%", color: "#f4ca11" }}>{<i className="fa fa-star"></i>}<ReactStars
                      count={1}
                      size={24}
                      isHalf={true}
                      fullIcon={<i className="fa fa-star"></i>}
                      activeColor="#f4ca11"
                    /></span>
                  </span>
                </p>
                <p className="notes ">
                  <span>Laravel</span>
                  <span>&#xB7;</span>
                  <span>Last deploy 3h ago</span>
                  <span>&#xB7;</span>
                  <span>United states</span>
                </p>
              </div>
            </li>
            <li className="Workcation ">
              <div className="flex items-center justify-between space-x-4 ">

                <div className="min-w-0 space-y-3 ">
                  <div className="flex items-center space-x-3 ">
                    <span className="block ">
                      <h3 className="hedi "><span aria-label="Running" className="green">
                        <div className="lightgreen"></div>
                      </span>
                        <div className="fey">Easywire</div>
                      </h3>
                    </span>
                  </div>
                  <div className="git">
                    <svg className="another " xmlns="http://www.w3.org/2000/svg " width="30 " height="20 ">
                      <path fill-rule="evenodd " clip-rule="evenodd " d="M8.99917 0C4.02996 0 0 4.02545 0 8.99143C0 12.9639 2.57853 16.3336 6.15489 17.5225C6.60518 17.6053 6.76927 17.3277 6.76927 17.0892C6.76927 16.8762 6.76153 16.3104 6.75711 15.5603C4.25372
                    16.1034 3.72553 14.3548 3.72553 14.3548C3.31612 13.316 2.72605 13.0395 2.72605 13.0395C1.9089 12.482 2.78793 12.4931 2.78793 12.4931C3.69127 12.5565 4.16643 13.4198 4.16643 13.4198C4.96921 14.7936 6.27312 14.3968 6.78584 14.1666C6.86761
                    13.5859 7.10022 13.1896 7.35713 12.965C5.35873 12.7381 3.25756 11.9665 3.25756 8.52116C3.25756 7.53978 3.6084 6.73667 4.18411 6.10854C4.09129 5.88114 3.78244 4.96654 4.27251 3.72904C4.27251 3.72904 5.02778 3.48728 6.74717 4.65082C7.46487
                    4.45101 8.23506 4.35165 9.00028 4.34779C9.76494 4.35165 10.5346 4.45101 11.2534 4.65082C12.9717 3.48728 13.7258 3.72904 13.7258 3.72904C14.217 4.96654 13.9082 5.88114 13.8159 6.10854C14.3927 6.73667 14.7408 7.53978 14.7408 8.52116C14.7408
                    11.9753 12.6363 12.7354 10.6318 12.9578C10.9545 13.2355 11.2423 13.7841 11.2423 14.6231C11.2423 15.8247 11.2313 16.7945 11.2313 17.0892C11.2313 17.3299 11.3937 17.6097 11.8501 17.522C15.4237 16.3303 18 12.9628 18 8.99143C18 4.02545 13.97
                    0 8.99917 0Z " fill="currentcolor " />
                    </svg>debbielewis/easywire
                  </div>
                </div>
              </div>
              <div className="meta ">
                <p className="site ">
                  <span>
                    Visit site <span style={{ fontSize: "150%", color: "#f4ca11" }}>&starf;</span>
                  </span>
                </p>
                <p className="notes ">
                  <span>NextJS</span>
                  <span>&#xB7;</span>
                  <span>Last deploy 6h ago</span>
                  <span>&#xB7;</span>
                  <span>United states</span>
                </p>
              </div>
            </li>
            <li className="Workcation ">
              <div className="flex items-center justify-between space-x-4 ">
                <div className="min-w-0 space-y-3 ">
                  <div className="flex items-center space-x-3 ">
                    <span className="block ">
                      <h3 className="hedi "><span aria-label="Running" className="green">
                        <div className="lightgreen"></div>
                      </span>
                        <div className="fey">Workflow</div>
                      </h3>
                    </span>
                  </div>
                  <div className="git">
                    <svg className="another " xmlns="http://www.w3.org/2000/svg " width="30 " height="20 ">
                      <path fill-rule="evenodd " clip-rule="evenodd " d="M8.99917 0C4.02996 0 0 4.02545 0 8.99143C0 12.9639 2.57853 16.3336 6.15489 17.5225C6.60518 17.6053 6.76927 17.3277 6.76927 17.0892C6.76927 16.8762 6.76153 16.3104 6.75711 15.5603C4.25372
                    16.1034 3.72553 14.3548 3.72553 14.3548C3.31612 13.316 2.72605 13.0395 2.72605 13.0395C1.9089 12.482 2.78793 12.4931 2.78793 12.4931C3.69127 12.5565 4.16643 13.4198 4.16643 13.4198C4.96921 14.7936 6.27312 14.3968 6.78584 14.1666C6.86761
                    13.5859 7.10022 13.1896 7.35713 12.965C5.35873 12.7381 3.25756 11.9665 3.25756 8.52116C3.25756 7.53978 3.6084 6.73667 4.18411 6.10854C4.09129 5.88114 3.78244 4.96654 4.27251 3.72904C4.27251 3.72904 5.02778 3.48728 6.74717 4.65082C7.46487
                    4.45101 8.23506 4.35165 9.00028 4.34779C9.76494 4.35165 10.5346 4.45101 11.2534 4.65082C12.9717 3.48728 13.7258 3.72904 13.7258 3.72904C14.217 4.96654 13.9082 5.88114 13.8159 6.10854C14.3927 6.73667 14.7408 7.53978 14.7408 8.52116C14.7408
                    11.9753 12.6363 12.7354 10.6318 12.9578C10.9545 13.2355 11.2423 13.7841 11.2423 14.6231C11.2423 15.8247 11.2313 16.7945 11.2313 17.0892C11.2313 17.3299 11.3937 17.6097 11.8501 17.522C15.4237 16.3303 18 12.9628 18 8.99143C18 4.02545 13.97
                    0 8.99917 0Z " fill="currentcolor " />
                    </svg>debbielewis/workflow
                  </div>
                </div>
              </div>
              <div className="meta ">
                <p className="site ">
                  <span>
                    Visit site <span style={{ fontSize: "150%", color: "#f4ca11" }}>&starf;</span>
                  </span>
                </p>
                <p className="notes ">
                  <span>Laravel</span>
                  <span>&#xB7;</span>
                  <span>Last deploy 4d ago</span>
                  <span>&#xB7;</span>
                  <span>United states</span>
                </p>
              </div>
            </li>
            <li className="Workcation ">
              <div className="flex items-center justify-between space-x-4 ">
                <div className="min-w-0 space-y-3 ">
                  <div className="flex items-center space-x-3 ">
                    <span className="block ">
                      <h3 className="hedi "><span aria-label="Running" className="grey">
                        <div className="lightgrey"></div>
                      </span>
                        <div className="fey">KiteTail</div>
                      </h3>
                    </span>
                  </div>
                  <div className="git">
                    <svg className="another " xmlns="http://www.w3.org/2000/svg " width="30 " height="20 ">
                      <path fill-rule="evenodd " clip-rule="evenodd " d="M8.99917 0C4.02996 0 0 4.02545 0 8.99143C0 12.9639 2.57853 16.3336 6.15489 17.5225C6.60518 17.6053 6.76927 17.3277 6.76927 17.0892C6.76927 16.8762 6.76153 16.3104 6.75711 15.5603C4.25372
                    16.1034 3.72553 14.3548 3.72553 14.3548C3.31612 13.316 2.72605 13.0395 2.72605 13.0395C1.9089 12.482 2.78793 12.4931 2.78793 12.4931C3.69127 12.5565 4.16643 13.4198 4.16643 13.4198C4.96921 14.7936 6.27312 14.3968 6.78584 14.1666C6.86761
                    13.5859 7.10022 13.1896 7.35713 12.965C5.35873 12.7381 3.25756 11.9665 3.25756 8.52116C3.25756 7.53978 3.6084 6.73667 4.18411 6.10854C4.09129 5.88114 3.78244 4.96654 4.27251 3.72904C4.27251 3.72904 5.02778 3.48728 6.74717 4.65082C7.46487
                    4.45101 8.23506 4.35165 9.00028 4.34779C9.76494 4.35165 10.5346 4.45101 11.2534 4.65082C12.9717 3.48728 13.7258 3.72904 13.7258 3.72904C14.217 4.96654 13.9082 5.88114 13.8159 6.10854C14.3927 6.73667 14.7408 7.53978 14.7408 8.52116C14.7408
                    11.9753 12.6363 12.7354 10.6318 12.9578C10.9545 13.2355 11.2423 13.7841 11.2423 14.6231C11.2423 15.8247 11.2313 16.7945 11.2313 17.0892C11.2313 17.3299 11.3937 17.6097 11.8501 17.522C15.4237 16.3303 18 12.9628 18 8.99143C18 4.02545 13.97
                    0 8.99917 0Z " fill="currentcolor " />
                    </svg>debbielewis/kitetail
                  </div>
                </div>
              </div>
              <div className="meta ">
                <p className="site ">
                  <span>
                    Visit site <span style={{ fontSize: "150%", color: "#d2d6dc" }}>&starf;</span>
                  </span>
                </p>
                <p className="notes ">
                  <span>Laravel</span>
                  <span>&#xB7;</span>
                  <span>Last deploy 4d ago</span>
                  <span>&#xB7;</span>
                  <span>United states</span>
                </p>
              </div>
            </li>
            <li className="Workcation ">
              <div className="flex items-center justify-between space-x-4 ">

                <div className="min-w-0 space-y-3 ">
                  <div className="flex items-center space-x-3 ">
                    <span className="block ">
                      <h3 className="hedi "><span aria-label="Running" className="green">
                        <div className="lightgreen"></div>
                      </span>
                        <div className="fey">Talk Slides</div>
                      </h3>
                    </span>
                  </div>
                  <div className="git">
                    <svg className="another " xmlns="http://www.w3.org/2000/svg " width="30 " height="20 ">
                      <path fill-rule="evenodd " clip-rule="evenodd " d="M8.99917 0C4.02996 0 0 4.02545 0 8.99143C0 12.9639 2.57853 16.3336 6.15489 17.5225C6.60518 17.6053 6.76927 17.3277 6.76927 17.0892C6.76927 16.8762 6.76153 16.3104 6.75711 15.5603C4.25372
                    16.1034 3.72553 14.3548 3.72553 14.3548C3.31612 13.316 2.72605 13.0395 2.72605 13.0395C1.9089 12.482 2.78793 12.4931 2.78793 12.4931C3.69127 12.5565 4.16643 13.4198 4.16643 13.4198C4.96921 14.7936 6.27312 14.3968 6.78584 14.1666C6.86761
                    13.5859 7.10022 13.1896 7.35713 12.965C5.35873 12.7381 3.25756 11.9665 3.25756 8.52116C3.25756 7.53978 3.6084 6.73667 4.18411 6.10854C4.09129 5.88114 3.78244 4.96654 4.27251 3.72904C4.27251 3.72904 5.02778 3.48728 6.74717 4.65082C7.46487
                    4.45101 8.23506 4.35165 9.00028 4.34779C9.76494 4.35165 10.5346 4.45101 11.2534 4.65082C12.9717 3.48728 13.7258 3.72904 13.7258 3.72904C14.217 4.96654 13.9082 5.88114 13.8159 6.10854C14.3927 6.73667 14.7408 7.53978 14.7408 8.52116C14.7408
                    11.9753 12.6363 12.7354 10.6318 12.9578C10.9545 13.2355 11.2423 13.7841 11.2423 14.6231C11.2423 15.8247 11.2313 16.7945 11.2313 17.0892C11.2313 17.3299 11.3937 17.6097 11.8501 17.522C15.4237 16.3303 18 12.9628 18 8.99143C18 4.02545 13.97
                    0 8.99917 0Z " fill="currentcolor " />
                    </svg>debbielewis/talk slides
                  </div>
                </div>
              </div>
              <div className="meta ">
                <p className="site ">
                  <span>
                    Visit site <span style={{ fontSize: "150%", color: "#f4ca11" }}>&starf;</span>
                  </span>
                </p>
                <p className="notes ">
                  <span>Laravel</span>
                  <span>&#xB7;</span>
                  <span>Last deploy 3h ago</span>
                  <span>&#xB7;</span>
                  <span>United states</span>
                </p>
              </div>
            </li>
            <li className="Workcation ">
              <div className="flex items-center justify-between space-x-4 ">

                <div className="min-w-0 space-y-3 ">
                  <div className="flex items-center space-x-3 ">
                    <span className="block ">
                      <h3 className="hedi "><span aria-label="Running" className="green">
                        <div className="lightgreen"></div>
                      </span>
                        <div className="fey">Personal Website</div>
                      </h3>
                    </span>
                  </div>
                  <div className="git">
                    <svg className="another " xmlns="http://www.w3.org/2000/svg " width="20 " height="20 ">
                      <path fill-rule="evenodd " clip-rule="evenodd " d="M8.99917 0C4.02996 0 0 4.02545 0 8.99143C0 12.9639 2.57853 16.3336 6.15489 17.5225C6.60518 17.6053 6.76927 17.3277 6.76927 17.0892C6.76927 16.8762 6.76153 16.3104 6.75711 15.5603C4.25372
                    16.1034 3.72553 14.3548 3.72553 14.3548C3.31612 13.316 2.72605 13.0395 2.72605 13.0395C1.9089 12.482 2.78793 12.4931 2.78793 12.4931C3.69127 12.5565 4.16643 13.4198 4.16643 13.4198C4.96921 14.7936 6.27312 14.3968 6.78584 14.1666C6.86761
                    13.5859 7.10022 13.1896 7.35713 12.965C5.35873 12.7381 3.25756 11.9665 3.25756 8.52116C3.25756 7.53978 3.6084 6.73667 4.18411 6.10854C4.09129 5.88114 3.78244 4.96654 4.27251 3.72904C4.27251 3.72904 5.02778 3.48728 6.74717 4.65082C7.46487
                    4.45101 8.23506 4.35165 9.00028 4.34779C9.76494 4.35165 10.5346 4.45101 11.2534 4.65082C12.9717 3.48728 13.7258 3.72904 13.7258 3.72904C14.217 4.96654 13.9082 5.88114 13.8159 6.10854C14.3927 6.73667 14.7408 7.53978 14.7408 8.52116C14.7408
                    11.9753 12.6363 12.7354 10.6318 12.9578C10.9545 13.2355 11.2423 13.7841 11.2423 14.6231C11.2423 15.8247 11.2313 16.7945 11.2313 17.0892C11.2313 17.3299 11.3937 17.6097 11.8501 17.522C15.4237 16.3303 18 12.9628 18 8.99143C18 4.02545 13.97
                    0 8.99917 0Z " fill="currentcolor " />
                    </svg>debbielewis/personal Website
                  </div>
                </div>
              </div>
              <div className="meta ">
                <p className="site ">
                  <span>
                    Visit site <span style={{ fontSize: "150%", color: "#d2d6dc" }}>&starf;</span>
                  </span>
                </p>
                <p className="notes ">
                  <span>NextJS</span>
                  <span>&#xB7;</span>
                  <span>Last deploy 6h ago</span>
                  <span>&#xB7;</span>
                  <span>United states</span>
                </p>
              </div>
            </li>

            <li className="Workcation ">
              <div className="flex items-center justify-between space-x-4 ">
                <div className="min-w-0 space-y-3 ">
                  <div className="flex items-center space-x-3 ">
                    <span className="block ">
                      <h3 className="hedi "><span aria-label="Running" className="grey">
                        <div className="lightgrey"></div>
                      </span>
                        <div className="fey">Digest</div>
                      </h3>
                    </span>
                  </div>
                  <div className="git">
                    <svg className="another " xmlns="http://www.w3.org/2000/svg " width="30 " height="20 ">
                      <path fill-rule="evenodd " clip-rule="evenodd " d="M8.99917 0C4.02996 0 0 4.02545 0 8.99143C0 12.9639 2.57853 16.3336 6.15489 17.5225C6.60518 17.6053 6.76927 17.3277 6.76927 17.0892C6.76927 16.8762 6.76153 16.3104 6.75711 15.5603C4.25372
                    16.1034 3.72553 14.3548 3.72553 14.3548C3.31612 13.316 2.72605 13.0395 2.72605 13.0395C1.9089 12.482 2.78793 12.4931 2.78793 12.4931C3.69127 12.5565 4.16643 13.4198 4.16643 13.4198C4.96921 14.7936 6.27312 14.3968 6.78584 14.1666C6.86761
                    13.5859 7.10022 13.1896 7.35713 12.965C5.35873 12.7381 3.25756 11.9665 3.25756 8.52116C3.25756 7.53978 3.6084 6.73667 4.18411 6.10854C4.09129 5.88114 3.78244 4.96654 4.27251 3.72904C4.27251 3.72904 5.02778 3.48728 6.74717 4.65082C7.46487
                    4.45101 8.23506 4.35165 9.00028 4.34779C9.76494 4.35165 10.5346 4.45101 11.2534 4.65082C12.9717 3.48728 13.7258 3.72904 13.7258 3.72904C14.217 4.96654 13.9082 5.88114 13.8159 6.10854C14.3927 6.73667 14.7408 7.53978 14.7408 8.52116C14.7408
                    11.9753 12.6363 12.7354 10.6318 12.9578C10.9545 13.2355 11.2423 13.7841 11.2423 14.6231C11.2423 15.8247 11.2313 16.7945 11.2313 17.0892C11.2313 17.3299 11.3937 17.6097 11.8501 17.522C15.4237 16.3303 18 12.9628 18 8.99143C18 4.02545 13.97
                    0 8.99917 0Z " fill="currentcolor " />
                    </svg>debbielewis/digest
                  </div>
                </div>
              </div>

              <div className="meta ">
                <p className="site ">
                  <span>
                    Visit site
                    <span style={{ color: "#d2d6dc", fontSize: "150%" }}>&starf;</span>
                  </span>
                </p>
                <p className="notes ">
                  <span>Laravel</span>
                  <span>&#xB7;</span>
                  <span>Last deploy 3h ago</span>
                  <span>&#xB7;</span>
                  <span>United states</span>
                </p>
              </div>
            </li>
          </div>
        </article>

        <article className="story-quarter ">
          <div className="act">
            <h4 className="activity-feed ">Activity</h4>
          </div>
          <div>
            <ul className="aci ">
              <li className="activity-item ">
                <div className="combine ">
                  <div className="together ">
                    <h3 className="t-name "><img src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&h=256&q=80 " width="30 " height="30 " alt=" " />
                      <div className="omg">You</div>
                    </h3>
                    <p className="time ">1h</p>
                  </div>
                  <p className="statement ">Deployed Workcation (2d89foc8 in master) to production</p>
                </div>
              </li>
              <li className="activity-item ">
                <div className="combine ">
                  <div className="together ">
                    <h3 className="t-name "><img src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&h=256&q=80 " width="30 " height="30 " alt=" " />
                      <div className="omg">You</div>
                    </h3>
                    <p className="time ">3h</p>
                  </div>
                  <p className="statement ">Deployed KiteTail (249df660 in master) staging</p>
                </div>
              </li>
              <li className="activity-item ">
                <div className="combine ">
                  <div className="together ">
                    <h3 className="t-name "><img src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&h=256&q=80 " width="30 " height="30 " alt=" " />
                      <div className="omg">You</div>
                    </h3>
                    <p className="time ">12h</p>
                  </div>
                  <p className="statement ">Deployed Workcation (11464223 in master) to staginging</p>
                </div>
              </li>
              <li className="activity-item ">
                <div className="combine ">
                  <div className="together ">
                    <h3 className="t-name "><img src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&h=256&q=80 " width="30 " height="30 " alt=" " />
                      <div className="omg">You</div>
                    </h3>
                    <p className="time ">2d</p>
                  </div>
                  <p className="statement ">Deployed Easywire(dad28e95 in master) to production</p>
                </div>
              </li>
              <li className="activity-item ">
                <div className="combine ">
                  <div className="together ">
                    <h3 className="t-name "><img src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&h=256&q=80 " width="30 " height="30 " alt=" " />
                      <div className="omg">You</div>
                    </h3>
                    <p className="time ">5d</p>
                  </div>
                  <p className="statement ">Deployed Easywire (624bc 94c in master) to production</p>
                </div>

              </li>
              <li className="activity-item ">
                <div className="combine ">
                  <div className="together ">
                    <h3 className="t-name "><img src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&h=256&q=80 " width="30 " height="30 " alt=" " />
                      <div className="omg">You</div>
                    </h3>
                    <p className="time ">1w</p>
                  </div>
                  <p className="statement ">Deployed Workcation (e111f80oin master) to production</p>
                </div>
              </li>
              <li className="activity-item ">
                <div className="combine ">
                  <div className="together ">
                    <h3 className="t-name "><img src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&h=256&q=80 " width="30 " height="30 " alt=" " />
                      <div className="omg">You</div>
                    </h3>
                    <p className="time ">1w</p>
                  </div>
                  <p className="statement ">Deployed Resumaid (5e136005in master) to production</p>
                </div>
              </li>
            </ul>
          </div>
        </article>
      </section>
    </div>
  );
}

export default Row;
