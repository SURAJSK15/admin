import React, { useState, useRef, useEffect } from 'react';
import { Chart } from "react-google-charts";
import Table from 'react-bootstrap/Table';
import { AdData } from "../Data/AdData";
import $ from 'jquery';
import FormatPrice from './Common/FromatPrice';


const Charts = () => {
    const [chartDatas, setChartData] = useState([
        ['Task', 'Hours per Day']
    ]);

    const [category, setCategory] = useState("clicks");

    var clicksum = 0;
    var clickcost = 0;
    var clickconversions = 0;
    var clickrevenue = 0;

    const tableRef = useRef(null);

    useEffect(() => {
        $(tableRef.current).DataTable();


    }, []);

    const chartData = [
        ['Task', 'Hours per Day'],


    ];

    const updateChartData = (selectedValue) => {

        const updatedChartData = [['Task', selectedValue]];

        AdData.forEach((curele) => {
            updatedChartData.push([curele.group, curele[selectedValue]]);
        });

        setChartData(updatedChartData);
    };

    const handleSelectChange = (event) => {
        const selectedValue = event.target.value;
        console.log(selectedValue);
        setCategory(selectedValue);
        switch (selectedValue) {
            case 'clicks':
                updateChartData('clicks');
                break;
            case 'reveune':
                updateChartData('reveune');
                break;
            case 'cost':
                updateChartData('cost');
                break;
            case 'conversion':
                updateChartData('conversion');
                break;
            default:
                break;
        }
    };

    useEffect(() => {
        updateChartData('clicks');
    }, []);





    const [activeTab, setActiveTab] = useState('home');

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };


    return (
        <>

           
                <div className="tab-content " id="pills-tabContent">

                <div className='table-responsive'>
                    <table ref={tableRef} className="table table-striped bordered" id="example" style={{ width: '100%' }}>
                        <thead>
                            <tr className='headeline-campagin-section'>

                                <td colSpan={4}>Ad Insights
                                    <select name="ads" id="adsights" onChange={handleSelectChange}>
                                        <option value="clicks">clicks</option>
                                        <option value="cost">cost</option>
                                        <option value="conversion">conversion</option>
                                        <option value="reveune">reveune</option>
                                    </select>
                                </td>
                                <td>


                                    <i class="fa-regular fa-circle-question"></i>
                                </td>


                            </tr>





                            <tr className={`heading-campaign cts ${activeTab === 'profile' ? 'active' : ''}`}>

                                <th>Group</th>
                                <th>Clicks</th>
                                <th>Cost</th>
                                <th>Conversions</th>
                                <th>Revenue</th>

                            </tr>
                        </thead>
                        <tbody>


                            {AdData.map((curele, index) => {
                                const { id, group, clicks, cost, conversion, reveune } = curele;


                                clicksum += clicks;
                                clickcost += cost;
                                clickconversions += conversion;
                                clickrevenue += reveune;

                                return (
                                    <>
                                        <tr className={`cts ${activeTab === 'profile' ? 'active' : ''}`}>
                                            <td>{group}</td>
                                            <td>{clicks}</td>
                                            <td> <FormatPrice val={cost} /></td>
                                            <td>{conversion}</td>
                                            <td><FormatPrice val={reveune} /></td>
                                        </tr>


                                    </>
                                )
                            })}
                        </tbody>
                        <thead>
                            <tr className={`cts ${activeTab === 'profile' ? 'active' : ''}`}>
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

                <div className={`chart-section ${activeTab === 'home' ? 'active' : ''}`}>
                    {setChartData}
                    <h2 className='chart-value'>{category} Table</h2>

                    <Chart
                        chartType="PieChart"
                        width={'100%'}
                        height={'400px'}
                        data={chartDatas}
                        options={{
                            pieHole: 0.4,
                        }}
                    />
                </div>
                <div className='main-toggle-ads'>
                    <ul className="nav nav-pills mb-3 ms-auto nav-section" id="pills-tab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button
                                className={`nav-link ${activeTab === 'home' ? 'active' : ''}`}
                                id="pills-home-tab"
                                onClick={() => handleTabClick('home')}
                                type="button"
                                role="tab"

                                aria-selected={activeTab === 'home'}
                            >
                                <i class="fa-solid fa-arrows-spin"></i>
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button
                                className={`nav-link ${activeTab === 'profile' ? 'active' : ''}`}
                                id="pills-profile-tab"
                                onClick={() => handleTabClick('profile')}
                                type="button"
                                role="tab"
                                aria-controls="pills-profile"
                                aria-selected={activeTab === 'profile'}
                            >
                                <i class="fa-solid fa-table-cells-large"></i>
                            </button>
                        </li>
                    </ul>
                </div>
           

        </>
    )
}

export default Charts;