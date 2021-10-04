import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import Link from 'next/link';

import styles from './UserProfile.module.css'

const UserProfile = ({
    username,
    name,
    email,
    phone,
    profession
}) => {

    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    return (
        <>

            <div className={`${styles.empProfile} container `}>
                
                    <div className="row">
                        <div className="col-md-4">
                            <div className={styles.profileImg}>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog" alt="" />
                                <div className={`${styles.file} btn btn-lg btn-primary}`}>
                                    Change Photo
                                    <input type="file" name="file" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className={styles.profileHead}>
                                <h5>
                                    {name}
                                </h5>
                                <h6>
                                   {profession}
                                </h6>
                                <p className={styles.proileRating}>RANKINGS : <span>8/10</span></p>
                                <Nav tabs className="mb-4">
                                    <NavItem>
                                        <NavLink
                                            className={classnames({ active: activeTab === '1' })}
                                            onClick={() => { toggle('1'); }}
                                        >
                                            profile
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className={classnames({ active: activeTab === '2' })}
                                            onClick={() => { toggle('2'); }}
                                        >
                                            Rating
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                            </div>

                            <TabContent activeTab={activeTab}>
                                <TabPane tabId="1">
                                    <Row>
                                        <Col sm="12">
                                            <div className="row mb-1">
                                                <div className="col-sm-6">
                                                    <label>User Id</label>
                                                </div>
                                                <div className="col-sm-6">
                                                    <p className={styles.pColor}>{username}</p>
                                                </div>
                                            </div>
                                            <div className="row mb-1">
                                                <div className="col-sm-6">
                                                    <label>Name</label>
                                                </div>
                                                <div className="col-sm-6">
                                                    <p className={styles.pColor}>{name}</p>
                                                </div>
                                            </div>
                                            <div className="row mb-1">
                                                <div className="col-sm-6">
                                                    <label>Email</label>
                                                </div>
                                                <div className="col-sm-6">
                                                    <p className={styles.pColor}>{email}</p>
                                                </div>
                                            </div>
                                            <div className="row mb-2">
                                                <div className="col-sm-6">
                                                    <label>Phone</label>
                                                </div>
                                                <div className="col-sm-6">
                                                    <p className={styles.pColor}> {phone}</p>
                                                </div>
                                            </div>
                                            <div className="row mb-2">
                                                <div className="col-sm-6">
                                                    <label>Profession</label>
                                                </div>
                                                <div className="col-sm-6">
                                                    <p className={styles.pColor}>{profession}</p>
                                                </div>
                                            </div>

                                            <Link href="/user/update" >
                                             <a className="btn btn-warning text-white mt-4"> <i className="far fa-edit mr-3"></i> Edit </a>     
                                            </Link>

                                        </Col>
                                    </Row>
                                </TabPane>
                                <TabPane tabId="2">
                                    <h4>Rating</h4>
                                </TabPane>
                            </TabContent>

                        </div>

                    </div>

            </div>
        </>
    )
}

export default UserProfile
