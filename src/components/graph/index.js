import   React from 'react';
import { Bar, defaults } from 'react-chartjs-2';
import { dataChartjs   } from '../../consts/';
import { getDataGraph  } from '../../helpers/';

defaults.global.animation = false;

export default function Graph(props) {
    let dataYear = props.data;
    let data     = getDataGraph(dataChartjs, dataYear ); 

    return (
      <div>
        <Bar
          data={data}
            options={{
                scales: {
                    yAxes: [{
                        stacked: true,
                        ticks: {
                            beginAtZero: true
                        }
                    }],
                    xAxes: [{
                        stacked: true,
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                    
                }
            }}
        />
      </div>
    );
};
