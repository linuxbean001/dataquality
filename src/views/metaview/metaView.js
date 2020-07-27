import React, { Component } from 'react'
import {
    CButton,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CRow,
    CDataTable,
    CDropdown,
    CDropdownItem,
    CDropdownMenu,
    CDropdownToggle,
    CNav,
    CNavItem,
    CNavLink
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
import './metaview.css';
import metaData from './metaData.js'

const fields = ['projectname','registered']

class MetaView extends Component {
    render() {
        return (
            <>
                <CCard>
                    <CCardHeader>

                    </CCardHeader>
                    <CCardBody>
                    <CRow>
                        <CCol xs="12" lg="6">
                        <CCard  className="catelog_tbl">
                            <CCardHeader>
                           <strong> Catalog Directory </strong>
                            </CCardHeader>
                            <CCardBody>
                            <CDataTable
                            items={metaData}
                            //fields={fields}
                            itemsPerPage={2}
                            pagination
                            scopedSlots = {{
                                'projectname':
                                  (item)=>(
                                    <td>
                                      <CButton active block color="link" aria-pressed="true"> <strong>{item.projectname}</strong></CButton>
                                    </td>
                                  )
                
                              }}
                            />
                            </CCardBody>
                        </CCard>
                        </CCol>
                       
                        <CCol xs="12" lg="6">
                        <CCol xs="12" lg="12">
                        <CCard  className="mapping_tbl">
                        <CCardHeader>
                                <CNav classNmae="mapping_list" variant="pills">
                                    <CDropdown inNav>
                                    <CDropdownToggle caret>
                                        Metadata
                                    </CDropdownToggle>
                                    <CDropdownMenu>
                                        <CDropdownItem>Action</CDropdownItem>
                                        <CDropdownItem>Another action</CDropdownItem>
                                        <CDropdownItem>Something else here</CDropdownItem>
                                        <CDropdownItem divider />
                                        <CDropdownItem>Separated link</CDropdownItem>
                                    </CDropdownMenu>
                                    </CDropdown>
                                    <CNavItem>
                                    <CNavLink>Location</CNavLink>
                                    </CNavItem>
                                    <CNavItem>
                                    <CNavLink>What's New</CNavLink>
                                    </CNavItem>
                                    <CNavItem>
                                    <CNavLink><strong>Mapping</strong></CNavLink>
                                    </CNavItem>

                                </CNav>
                        </CCardHeader>
                        </CCard>
                        </CCol>

                        <CCol xs="12" lg="12">   
                            <CCard  className="mapping_tbl type_data">
                                <CCardBody>
                                <CRow>
                                <CCol xs="12" lg="6">  
                                <CCardBody>
                                      <p>Table A</p>
                                      <p>Col-A Data Type Integer</p>
                                </CCardBody>      
                                </CCol>
                                <CCol xs="12" lg="6">  
                                <CCardBody>
                                      <p>Table C</p>
                                      <p>My-Col Data Type Integer</p>
                                      <p>(2000 match 1:1, 20 no match)</p>
                                      </CCardBody>
                                </CCol>
                                </CRow>

                                <CRow>
                                <CCol xs="12" lg="6">  
                                <CCardBody>
                                      <p>Table A</p>
                                      <p>Col-A Data Type Integer</p>
                                </CCardBody>      
                                </CCol>
                                <CCol xs="12" lg="6">  
                                <CCardBody>
                                      <p>Table C</p>
                                      <p>My-Col Data Type Integer</p>
                                      <p>(2000 match 1:1, 20 no match)</p>
                                      </CCardBody>
                                </CCol>
                                </CRow>

                                </CCardBody>
                            </CCard>
                        </CCol>
                        </CCol>
                        </CRow>
{/* 
                        <CRow>
                        <CCol xs="12" lg="6">
                        <CCol class="payload_sec" xs="12" lg="12">
                     
                           <strong> Create Payload  </strong> 
                                <CNav className="catalogue_list" variant="pills">
                                    <CDropdown inNav>
                                    <CDropdownToggle caret>
                                        CataLogue
                                    </CDropdownToggle>
                                    <CDropdownMenu>
                                        <CDropdownItem>Action</CDropdownItem>
                                        <CDropdownItem>Another action</CDropdownItem>
                                        <CDropdownItem>Something else here</CDropdownItem>
                                        <CDropdownItem divider />
                                        <CDropdownItem>Separated link</CDropdownItem>
                                    </CDropdownMenu>
                                    </CDropdown>
                                </CNav>
                       
                        </CCol>

                        <CCol xs="12" lg="12">   
                            <CCard  className="mapping_tbl type_data">
                                <CCardBody>
                                <CRow>
                                <CCol xs="12" lg="6">  
                                <CCardBody>
                                      <p>Table A</p>
                                      <p>Col-A Data Type Integer</p>
                                </CCardBody>      
                                </CCol>
                                <CCol xs="12" lg="6">  
                                <CCardBody>
                                      <p>Table C</p>
                                      <p>My-Col Data Type Integer</p>
                                      <p>(2000 match 1:1, 20 no match)</p>
                                      </CCardBody>
                                </CCol>
                                </CRow>

                                <CRow>
                                <CCol xs="12" lg="6">  
                                <CCardBody>
                                      <p>Table A</p>
                                      <p>Col-A Data Type Integer</p>
                                </CCardBody>      
                                </CCol>
                                <CCol xs="12" lg="6">  
                                <CCardBody>
                                      <p>Table C</p>
                                      <p>My-Col Data Type Integer</p>
                                      <p>(2000 match 1:1, 20 no match)</p>
                                      </CCardBody>
                                </CCol>
                                </CRow>

                                </CCardBody>
                            </CCard>
                        </CCol>
                        </CCol>
                        </CRow> */}
                    </CCardBody>
                </CCard>

            </>
        )
    }
}

export default MetaView
