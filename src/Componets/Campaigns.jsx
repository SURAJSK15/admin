
import React, { useEffect, useRef } from 'react';
import $ from 'jquery';
import { CampaignsData } from '../Data/CampaignsData';
import FormatPrice from './Common/FromatPrice';
import Table from 'react-bootstrap/Table';


const Campaigns = () => {
  var clicksum = 0;
  var clickcost = 0;
  var clickconversions = 0;
  var clickrevenue = 0;

  const tableRef = useRef(null);

  useEffect(() => {
    $(tableRef.current).DataTable();


  }, []);
  return (
    <>
      <div className='campaigan-chart'>
      <div className='table-responsive'>
        <table ref={tableRef} className="table table-striped bordered campagin-data-table" id="example" style={{ width: '100%' }}>
          <thead>
            <tr className='headeline-campagin-section'>

              <td colSpan={4}>Ad Insights</td>
              <td><i class="fa-regular fa-circle-question"></i></td>

            </tr>
            <tr className='heading-campagin'>
              <th> Campaigns	</th>
              <th> Clicks</th>
              <th>Cost</th>
              <th>Conversions	</th>
              <th>Revenue</th>

            </tr>
          </thead>
          <tbody>

            {CampaignsData.map((curele, index) => {
              const { id, title, clicks, cost, conversions, revenue } = curele;


              clicksum += clicks;
              clickcost += cost;
              clickconversions += conversions;
              clickrevenue += revenue;

              return (
                <>
                  <tr>
                    <td>{title}</td>
                    <td>{clicks}</td>
                    <td> <FormatPrice val={cost} /></td>
                    <td>{conversions}</td>
                    <td><FormatPrice val={revenue} /></td>
                  </tr>


                </>
              )
            })}



          </tbody>
          <thead>
            <tr>
              <td>Total</td>
              <td>{clicksum}</td>
              <td> {clickcost}</td>
              <td> {clickconversions}</td>
              <td><FormatPrice val={clickrevenue} /></td>
            </tr>
          </thead>
        </table>
      </div>
      </div>


    </>

  );
};



export default Campaigns;












