import React, { Component } from 'react'
import {
    CButton,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CRow,
    CInput,
    CFormGroup,
    CLabel,
    CFormText,
    CTextarea
} from '@coreui/react'
import {
    CChartBar,
    CChartLine,
    CChartDoughnut,
    CChartRadar,
    CChartPie,
    CChartPolarArea
} from '@coreui/react-chartjs'
import CIcon from '@coreui/icons-react'
import './adminview.css';

class AdminView extends Component {
    render() {
        return (
            <>
                <CCard>
                    <CCardHeader>

                    </CCardHeader>
                    <CCardBody>
                        <CRow className="align-items-center">
                            <CCol col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                                <CRow>
                                    <CFormGroup row>
                                        <CCol md="4">
                                            <CLabel className="btn-padding-left btn-padding" htmlFor="text-input">DB Name</CLabel>
                                        </CCol>
                                        <CCol xs="12" md="8" className="btn-padding">
                                            <CInput id="text-input" name="text-input" placeholder="" />
                                        </CCol>
                                        <CCol md="4">
                                            <CLabel className="btn-padding-left btn-padding" htmlFor="text-input">User</CLabel>
                                        </CCol>
                                        <CCol xs="12" md="8" className="btn-padding">
                                            <CInput id="text-input" name="text-input" placeholder="" />
                                        </CCol>
                                        <CCol md="4">
                                            <CLabel className="btn-padding-left btn-padding" htmlFor="text-input">Password</CLabel>
                                        </CCol>
                                        <CCol xs="12" md="8" className="btn-padding">
                                            <CInput id="text-input" name="text-input" placeholder="" />
                                        </CCol>
                                        <CCol md="4">
                                            <CLabel className="btn-padding-left btn-padding" htmlFor="text-input">DB Connect String</CLabel>
                                        </CCol>
                                        <CCol xs="12" md="8" className="btn-padding">
                                            <CInput id="text-input" name="text-input" placeholder="" />
                                        </CCol>
                                        <CCol md="4">
                                            <CLabel className="btn-padding-left btn-padding" htmlFor="text-input">Schema</CLabel>
                                        </CCol>
                                        <CCol xs="12" md="8" className="btn-padding">
                                            <CInput id="text-input" name="text-input" placeholder="" />
                                        </CCol>

                                        <CCol md="4" className="btn-test">
                                            <CButton block color="success">Test</CButton>
                                        </CCol>
                                        <CCol md="4" className="btn-padding">
                                            <CButton block color="success">Save</CButton>
                                        </CCol>
                                    </CFormGroup>
                                </CRow>

                            </CCol>

                            <CCol col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                                {/* <CLabel className="text-style" htmlFor="date-input">Oracle Customer DB</CLabel> */}
                                <CFormGroup row>

                                    <CCol md="4">
                                        <a href="">Search Rules</a>
                                    </CCol>
                                    <CCol md="4">
                                        <a href="">Edit Rules</a>
                                    </CCol>
                                    <CCol md="4">
                                        <a href="">Create Rules</a>
                                    </CCol>
                                    <CCol md="3">
                                        <CLabel htmlFor="textarea-input">My Rule 1</CLabel>
                                    </CCol>
                                    <CCol xs="12" md="9">
                                        <CTextarea
                                            name="textarea-input"
                                            id="textarea-input"
                                            rows="9"
                                            placeholder="TableA Col is Not Null and has an entry into TableV.col32"
                                        />
                                    </CCol>
                                    <CCol md="4" className="btn-run">
                                        <CButton block color="success">Raw Code</CButton>
                                    </CCol>
                                    <CCol md="3" className="btn-leftside">
                                        <CButton block color="success">Validate</CButton>
                                    </CCol>
                                    <CCol md="3" className="btn-leftside">
                                        <CButton block color="success">Submit</CButton>
                                    </CCol>
                                </CFormGroup>
                            </CCol>

                        </CRow>
                        <CLabel className="table-info" htmlFor="textarea-input">Table Information</CLabel>
                        <CRow className="align-items-center">
                            <CCol col="4" sm="4" md="2" xl className="mb-3 mb-xl-0">
                                <CRow>
                                    <CCol md="4">
                                        <a href="">CTable1</a>
                                    </CCol>
                                </CRow>
                                <CRow>
                                    <CCol md="4">
                                        <a href="">CTable2</a>
                                    </CCol>
                                </CRow>
                                <CRow>
                                    <CCol md="4">
                                        <a href="">CTable3</a>
                                    </CCol>
                                </CRow>
                                <CRow>
                                    <CCol md="4">
                                        <a href="">CTable3</a>
                                    </CCol>
                                </CRow>
                                <CRow>
                                    <CCol md="4">
                                        <a href="">CTable4</a>
                                    </CCol>

                                </CRow>
                            </CCol>
                            <CCol col="8" sm="4" md="2" xl className="mb-3 mb-xl-0">
                                <CRow>

                                    <CChartBar
                                        className="btn-padding"
                                        type="bar"
                                        datasets={[
                                            {
                                                label: 'Usage and Data Growth',
                                                backgroundColor: '#f87979',
                                                data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
                                            }
                                        ]}

                                        options={{
                                            tooltips: {
                                                enabled: true
                                            }
                                        }}
                                    />
                                    <CChartDoughnut
                                        type="doughnut"
                                        datasets={[
                                            {
                                                backgroundColor: [
                                                    '#41B883',
                                                    '#E46651',
                                                    '#00D8FF',
                                                    '#DD1B16'
                                                ],
                                                data: [40, 20, 80, 10]
                                            }
                                        ]}
                                        labels={[]}
                                        options={{
                                            tooltips: {
                                                enabled: true
                                            }
                                        }}
                                    />
                                </CRow>
                                
                            </CCol>
                        </CRow>
                        <CFormGroup row>

                            <CCol md="3">
                                <a href="">Create Access Rule</a>
                            </CCol>
                            <CCol md="3">
                                <a href="">Create Audit Rule</a>
                            </CCol>
                            <CCol md="3">
                                <a href="">Create Masking Rule</a>
                            </CCol>
                            <CCol md="3">
                                <a href="">Schedule Rules</a>
                            </CCol>
                        </CFormGroup>
                    </CCardBody>
                </CCard>

            </>
        )
    }
}

export default AdminView
