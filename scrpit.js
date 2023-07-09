// get"scrollToTopBtn" 
var scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Add a scroll event listener to the window object
window.addEventListener("scroll", function () {
  // If user scrolls down more than 20 pixels, show the button
  if (window.pageYOffset > 20) {
    scrollToTopBtn.style.display = "block";
  } 
});

// Add a click event listener to the "scrollToTopBtn" element
scrollToTopBtn.addEventListener("click", function() {
  // Scroll to top smoothly
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});


let serviceData = document.querySelector('.service-data');// Get the "serviceData" element by its class name
const serviceDataToShow = [ // Define an array of objects that contain data for each service
	{
		id: 1,
		image: 'Search-doctor.svg',
		title: 'Search doctor',
		description:
			'Choose your doctor from thousands of specialist, general, and trusted hospitals',
	},
	{
		id: 2,
		image: 'Online-pharmacy.svg',
		title: 'Online pharmacy',
		description:
			'Buy  your medicines with our mobile application with a simple delivery system',
	},
	{
		id: 3,
		image: 'Consultation.svg',
		title: 'Consultation',
		description:
			'Free consultation with our trusted doctors and get the best recomendations',
	},
	{
		id: 4,
		image: 'Details-info.svg',
		title: 'Details info',
		description:
			'Free consultation with our trusted doctors and get the best recomendations',
	},
	{
		id: 5,
		image: 'Emergency-care.svg',
		title: 'Emergency care',
		description:
			'You can get 24/7 urgent care for yourself or your children and your lovely family',
	},
	{
		id: 6,
		image: 'Tracking.svg',
		title: 'Tracking',
		description: 'Track and save your medical history and health data ',
	},
];
const mappedServiceData = serviceDataToShow.map((data) => { // Map the data for each service to a HTML string and store it in an array
	return `<div class="card" key = ${data.id}>
					<img
						src= ${"./images/"+data.image}
						alt="Search"
						height="90.01px"
						width="91.98px" />
					<b class="card-title">${data.title}</b>
					<p class="card-description">
						${data.description}

					</p>
				</div>`;
	
	
	
});
serviceData.innerHTML = mappedServiceData; // Set the innerHTML of the "serviceData" element to the mappedServiceData array
