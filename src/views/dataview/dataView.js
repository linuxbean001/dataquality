import React from 'react'
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
import './dataview.css';

const Buttons = () => {
    return (
        <>
            <CCard>
                <CCardHeader>
                    There are 25 data assets registered for your organization.
        </CCardHeader>
                <CCardBody>
                    <CRow className="align-items-center">
                        <CCol col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                            <CRow>
                                <CCol col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                                    <CButton block color="success">Oracle Customer DB</CButton>
                                </CCol>
                                <CCol col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                                    <CInput type="date" id="date-input" name="date-input" placeholder="date" />
                                </CCol>
                            </CRow>
                            <CRow className="btn-padding">
                                <CCol col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                                    <CButton block color="success">SAP Financial DB</CButton>
                                </CCol>
                                <CCol col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                                    <CInput type="date" id="date-input" name="date-input" placeholder="date" />
                                </CCol>
                            </CRow>
                            <CRow className="btn-padding">
                                <CCol col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                                    <CButton block color="success">Mysql system DB</CButton>
                                </CCol>
                                <CCol col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                                    <CInput type="date" id="date-input" name="date-input" placeholder="date" />
                                </CCol>
                            </CRow>
                            <CRow className="btn-padding">
                                <CCol col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                                    <CButton block color="success">3rd party DB</CButton>
                                </CCol>
                                <CCol col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                                    <CInput type="date" id="date-input" name="date-input" placeholder="date" />
                                </CCol>
                            </CRow>
                            <CRow className="btn-padding">
                                <CCol col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                                    <CButton block color="success">Vendor management System</CButton>
                                </CCol>
                                <CCol col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                                    <CInput type="date" id="date-input" name="date-input" placeholder="date" />
                                </CCol>
                            </CRow>
                            <CRow className="btn-padding">
                                <CCol col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                                    <CButton block color="success">My CSV file</CButton>
                                </CCol>
                                <CCol col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                                    <CInput type="date" id="date-input" name="date-input" placeholder="date" />
                                </CCol>
                            </CRow>
                            <CRow className="btn-padding">
                                <CCol col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                                    <CButton block color="success">Oracle cloud DB</CButton>
                                </CCol>
                                <CCol col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                                    <CInput type="date" id="date-input" name="date-input" placeholder="date" />
                                </CCol>
                            </CRow>
                        </CCol>

                        <CCol col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                            <CLabel className="text-style" htmlFor="date-input">Oracle Customer DB</CLabel>
                            <CFormGroup row>
                                <CCol md="3">
                                    <CLabel htmlFor="date-input">Data Steward</CLabel>
                                </CCol>
                                <CCol xs="12" md="9">
                                    <CLabel htmlFor="date-input">- aa@mycom.com</CLabel>
                                </CCol>
                                <CCol md="3">
                                    <CLabel htmlFor="date-input">DBA </CLabel>
                                </CCol>
                                <CCol xs="12" md="9">
                                    <CLabel htmlFor="date-input">-ab@mycom.com</CLabel>
                                </CCol>
                                <CCol md="3">
                                    <CLabel htmlFor="date-input">Business owner</CLabel>
                                </CCol>
                                <CCol xs="12" md="9">
                                    <CLabel htmlFor="date-input">-cc@myc.com</CLabel>
                                </CCol>
                                <CCol md="6" className="btn-padding">
                                    <CButton block color="primary">Pull MetaData</CButton>
                                </CCol>
                                <CCol xs="12" md="6" className="btn-padding">
                                    <CLabel htmlFor="date-input">Show randow 100 values</CLabel>
                                </CCol>

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
                            </CFormGroup>
                        </CCol>

                    </CRow>

                </CCardBody>
            </CCard>

        </>
    )
}

export default Buttons
