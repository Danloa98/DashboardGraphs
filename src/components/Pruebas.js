import React, { useEffect, useState } from 'react'
import { Line, defaults } from "react-chartjs-2";
import { Cuadro, Rectangulo, Cuadro2, RectanguloB, Carta, Texto } from './StyledElements'
import io from 'socket.io-client';
import '../App.css';
import {Nav} from './StyledElements'

const baseUrl = "http://localhost:3000";



function Pruebas() {
      //HOOKS
  const [graph1, setGraph1] = useState([])
  const [graph2, setGraph2] = useState([])
  const [graph3, setGraph3] = useState([])
  const [graph4, setGraph4] = useState([])
  const [graph5, setGraph5] = useState([])

      //-----------SOCKET CONNECTION
      const socket = io.connect(baseUrl);
 
      //-------------------
      useEffect(() => {      
        socket.emit("ram", "asd-prueba");    
        socket.on("ram", async (mensaje) => {
        console.log("MENSAJE: ", mensaje);
        //llenar(mensaje)
        })
      }, [socket]);
  


  return (

      <div>
          <Nav>
              <Texto>
                  <h1 >
                    DASHBOARD 
                  </h1>
              </Texto>
          </Nav>

    <section class="cards-wrapper">
  <div class="card-grid-space">
    filtro?
    <a class="card">
    <Line
          data={{
            labels: [1,2,5,1,1,1,1,1],
            datasets: [
              {
                label: "graph5",
                data: [1,2,3,2,4,6,7,8],
                borderColor: "pink",
                borderWidth: 1,
              },
            ],
          }}
          height={400}
          width={600}
          options={{
            maintainAspectRatio: false,
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
            },
            legend: {
              labels: {
                fontSize: 25,
              },
            },
          }}
        />
    </a>
  </div>
  <div class="card-grid-space">
    <a class="card">
    <Line
          data={{
            labels: [1,2,5,1,1,1,1,1],
            datasets: [
              {
                label: "suciedad vs tiempo",
                data: [1,2,3,2,4,6,7,8],
                borderColor: "orange",
                borderWidth: 1,
              },
            ],
          }}
          height={400}
          width={600}
          options={{
            maintainAspectRatio: false,
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
            },
            legend: {
              labels: {
                fontSize: 25,
              },
            },
          }}
        />
        
    </a>
  </div>
  <div class="card-grid-space">
    <a class="card" >
    <Line
          data={{
            labels: [1,2,5,1,1,1,1,1],
            datasets: [
              {
                label: "graph2",
                data: [1,2,5,20,1,60,1,1],
                borderColor: "red",
                borderWidth: 1,
                
              },
            ],
          }}
          height={400}
          width={600}
          options={{
            maintainAspectRatio: false,
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
            },
            legend: {
              labels: {
                fontSize: 25,
              },
            },
          }}
        />
    </a>
  </div>
  <div class="card-grid-space">
    <a class="card" >
    <Line
            
            data={{
              labels: [1,2,5,1,1,1,1,1],
              datasets: [
                {
                  label: "graph4",
                  data: [1,2,3,2,4,6,7,8],
                  borderColor: "purple",
                  borderWidth: 1,
                },
              ],
            }}
            height={400}
            width={600}
            options={{
              maintainAspectRatio: false,
              scales: {
                yAxes: [
                  {
                    ticks: {
                      beginAtZero: true,
                    },
                  },
                ],
              },
              legend: {
                labels: {
                  fontSize: 15,
                },
              },
            }
          }
          />

    </a>
  </div>
  <div class="card-grid-space">
    <a class="card" >
    <Line
          data={{
            labels: [1,2,5,1,2,2,2,2,2,2,0],
            datasets: [
              {
                label: "graph3",
                data: [1,2,3,15,3,4,12,9,1,4,5],
                borderColor: "green",
                borderWidth: 1,
              },
            ],
          }}
          height={400}
          width={600}
          options={{
            maintainAspectRatio: false,
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
            },
            legend: {
              labels: {
                fontSize: 25,
              },
            },
          }}
        />

    </a>
  </div>
</section>
</div>
  )
}

export default Pruebas