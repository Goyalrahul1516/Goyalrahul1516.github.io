document.addEventListener('DOMContentLoaded', () => {
  const projects = [
      {
          title: 'Almond Detection System',
          description:
              'Machine learning model for detecting bad almonds using YOLO.',
          image:
              'assets/images/Almond_Detection_using_YOLO.gif', // Use a GIF or static image for preview
          video:
              'https://www.youtube.com/embed/3r6JDYR8gnI',
          repoLink:
              'https://github.com/goyalrahul1516/almond_detection'
      },
      {
          title: 'SmartSack : BLE Technology for Food Storage Efficiency',
          description:
              'A smart IoT system for real-time monitoring and control.',
          image:
              'assets/images/SmartSack_BLE_Technology_for_Food_Storage_Efficiency.gif',
          video:
              'https://www.youtube.com/embed/GKHhq9ATXk0',
          repoLink:
              'https://github.com/goyalrahul1516/Grasp'
      }
  ];

  const projectsGrid = document.querySelector('.projects-grid');
  
  const modal = document.createElement('div');
  modal.className = 'modal';
  
  // Create modal structure
  modal.innerHTML = `
      <div class="modal-content">
          <span class="modal-close">&times;</span>
          <div class="modal-body"></div>
      </div>
  `;
  
  document.body.appendChild(modal);

  // Project card creation
  projects.forEach(project => {
      const card = document.createElement('div');
      card.className = 'project-card';
      card.innerHTML = `
          <div class="preview-overlay">
              <img src="${project.image}" alt="${project.title} Preview">
          </div>
          <h3>${project.title}</h3>
          <p>${project.description}</p>
      `;

      // Click handler for modal
      card.addEventListener('click', () => {
          const modalBody = modal.querySelector('.modal-body');
          
          // Populate modal with project details (video only)
          modalBody.innerHTML = `
              <h2>${project.title}</h2>
              <p>${project.description}</p>
              
              <!-- Embedded Video -->
              <div class="video-container">
                  <iframe src="${project.video}" frameborder="0" allowfullscreen></iframe>
              </div>
              
              <!-- GitHub Link -->
              <a href="${project.repoLink}" target="_blank" class="repo-link">View GitHub Repository</a>
          `;
          
          // Show modal
          modal.classList.add('active');
      });

      projectsGrid.appendChild(card);
  });

  // Modal close functionality
  modal.querySelector('.modal-close').addEventListener('click', () => {
      modal.classList.remove('active');
  });

  // Close modal when clicking outside content
  modal.addEventListener('click', (e) => {
      if (e.target === modal) {
          modal.classList.remove('active');
      }
  });
});