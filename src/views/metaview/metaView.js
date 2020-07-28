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
    CNavLink,
    CSelect,
    CFormGroup,
    CLabel
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
import { TreeView } from '@progress/kendo-react-treeview';

const fields = ['projectname','registered']
const tree = [{
    text: 'DB A', expanded: true, items: [
        { text: 'Tables A' , expanded: true, items: [{ text: 'Column 1'},{ text: 'Column 2'},{ text: 'Column 3'}] }]
}];
class MetaView extends Component {

    onItemClick = (event) => {
        event.item.selected = !event.item.selected;
        this.forceUpdate();
    }
    onExpandChange = (event) => {
        event.item.expanded = !event.item.expanded;
        this.forceUpdate();
    }

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

                        <CRow>
                        <CCol xs="12" lg="4">
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
                            <CCard  className="payload_tbl">
                                <CCardBody>
                                
                                <TreeView
                                    data={tree}
                                    expandIcons={true}
                                    onExpandChange={this.onExpandChange}
                                    onItemClick={this.onItemClick}
                                    aria-multiselectable={true}
                                />

                                </CCardBody>
                            </CCard>
                        </CCol>
                        </CCol>

                        <CCol xs="12" lg="8">

                        <CCol className="output_section-top" xs="12" lg="12">   
                        <CCard  className="catelog_tbl">
                            <CCardBody> 
                                </CCardBody>    
                        </CCard>
                        </CCol>
                        <CCol className="output_section-bottom" xs="12" lg="12">  
                         <CCard  className="">
                            <CCardBody>
                            <CRow>    
                            <CCol  xs="12" lg="4" className="output-sec1" >  
                                 <p>DB.Table.Col1</p>
                                 <p>DB.Table.Col2</p>
                            </CCol> 
                          
                            <CCol  xs="12" lg="2" className="output-sec2" >  
                                 <p>Inner</p>
                            </CCol> 
                            
                            <CCol  xs="12" lg="3" className="output-sec3" >  
                            <CFormGroup>
                                
                                <CSelect width={70} multiple custom name="ccmonth" id="ccmonth">
                                <option value="1">Col1</option>
                                <option value="2">Col2</option>
                                <option value="3">Col3</option>
                                <option value="4">Col4</option>
                                <option value="5">Col5</option>
                                <option value="6">Col6</option>
                               
                                </CSelect>
                            </CFormGroup>
                            </CCol>
                            
                            <CCol  xs="12" lg="3" className="output-sec4" >  
                                 <p>Output</p>
                            </CCol> 
                            </CRow>


                            <CRow>    
                            <CCol  xs="12" lg="4" className="output-sec1" >  
                                 <p>DB.Table.Col1</p>
                                 <p>DB.Table.Col2</p>
                            </CCol> 
                          
                            <CCol  xs="12" lg="2" className="output-sec2" >  
                                 <p>Inner</p>
                            </CCol> 
                            
                            <CCol  xs="12" lg="3" className="output-sec3" >  
                            <CFormGroup>
                                
                                <CSelect width={70} multiple custom name="ccmonth" id="ccmonth">
                                <option value="1">Col1</option>
                                <option value="2">Col2</option>
                                <option value="3">Col3</option>
                                <option value="4">Col4</option>
                                <option value="5">Col5</option>
                                <option value="6">Col6</option>
                               
                                </CSelect>
                            </CFormGroup>
                            </CCol>
                            
                            <CCol  xs="12" lg="3" className="output-sec4" >  
                                 <p>Output</p>
                            </CCol> 
                            </CRow>
                            </CCardBody>    
                          </CCard>
                           </CCol>
                       

                           <CCol className="output_section-top" xs="12" lg="12">   
                        <CCard  className="catelog_tbl">
                            <CCardBody> 
                            <CRow> 
                            <CCol md="4" className="btn-run">
                                        <CButton block color="success">Show Raw Code</CButton>
                            </CCol>
                                    <CCol md="3" className="btn-leftside">
                                        <CButton block color="success">Validate</CButton>
                                    </CCol>
                                    <CCol md="3" className="btn-leftside">
                                        <CButton block color="success">Save</CButton>
                                    </CCol>
                                    </CRow> 
                                </CCardBody>    
                        </CCard>
                        </CCol>
                        
                           </CCol>

                           </CRow>

                        <CFormGroup row>
                            <CCol md="3">
                                <a href="">Show Version</a>
                            </CCol>
                            <CCol md="3">
                                <a href="">Show Data Lineage</a>
                            </CCol>
                            <CCol md="3">
                                <a href="">Navigate Date lake</a>
                            </CCol>
                            <CCol md="3">
                                <a href="">Show Payload</a>
                            </CCol>
                        </CFormGroup>

                    </CCardBody>
                </CCard>

            </>
        )
    }
}

export default MetaView
