// Dynamically add projects to the portfolio
document.addEventListener('DOMContentLoaded', () => {
  const projects = [
    {
      title: 'Low Power FPGA Synthesizer',
      description: 'An energy-efficient synthesizer circuit implemented on FPGA.',
      image: 'assets/images/fpga-synthesizer.png',
      video: 'https://www.youtube.com/embed/example-video-id',
      codeSnippet: `
        module Synthesizer(input clk, output reg [7:0] wave);
        always @(posedge clk) begin
          wave <= wave + 1;
        end
        endmodule
      `,
      repoLink: 'https://github.com/goyalrahul1516/fpga-synthesizer'
    },
    {
      title: 'Embedded IoT System',
      description: 'A smart IoT system for real-time monitoring and control.',
      image: 'assets/images/iot-system.png',
      video: 'https://www.youtube.com/embed/example-video-id2',
      codeSnippet: `
        #include <WiFi.h>
        void setup() {
          WiFi.begin("SSID", "PASSWORD");
        }
        void loop() {
          // IoT logic here
        }
      `,
      repoLink: 'https://github.com/goyalrahul1516/embedded-iot-system'
    }
  ];

  const projectsGrid = document.querySelector('.projects-grid');
  projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.classList.add('project-card');
    projectCard.innerHTML = `
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <img src="${project.image}" alt="${project.title}">
      <iframe src="${project.video}" frameborder="0" allowfullscreen></iframe>
      <pre><code>${project.codeSnippet}</code></pre>
      <a href="${project.repoLink}" target="_blank">View Repository</a>
    `;
    projectsGrid.appendChild(projectCard);
  });
});
