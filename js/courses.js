        // Course data
        const courses = [
            // Programming and Web Courses
            {
                id: 1,
                title: "Scratch Programming hello",
                description: "Introduces basic visual programming concepts",
                category: "programming",
                level: "beginner",
                duration: "6 Weeks",
                rating: "4.7 (150)",
                image: "scratch.jpeg",

                certificate: true
            },
            {
                id: 2,
                title: "HTML/CSS Fundamentals",
                description: "Learn to build and style web pages",
                category: "programming",
                level: "beginner",
                duration: "8 Weeks",
                rating: "4.5 (200)",
                image: "html-css.jpeg",
                 certificate: true
            },
            {
                id: 3,
                title: "JavaScript for Web",
                description: "Create interactive web applications",
                category: "programming",
                level: "intermediate",
                duration: "10 Weeks",
                rating: "4.8 (180)",
                image: "js.jpeg",
                certificate: true
            },
            {
                id: 4,
                title: "Python Programming",
                description: "Apply Python in data analysis and robotics",
                category: "programming",
                level: "intermediate",
                duration: "12 Weeks",
                rating: "4.9 (250)",
                image: "python.jpeg",
                certificate: true
            },
            {
                id: 5,
                title: "Java OOP",
                description: "Master object-oriented programming with Java",
                category: "programming",
                level: "advanced",
                duration: "14 Weeks",
                rating: "4.6 (120)",
                image: "java.jpeg",
                certificate: true
            },
            {
                id: 6,
                title: "C/C++ Programming",
                description: "Learn advanced, low-level programming",
                category: "programming",
                level: "advanced",
                duration: "16 Weeks",
                rating: "4.7 (90)",
                image: "c-c++.jpeg",
                certificate: true
            },
            
            // Robotics and Electronics Courses
            {
                id: 7,
                title: "LEGO Robotics",
                description: "Build and program robots with LEGO Mindstorms",
                category: "robotics",
                level: "beginner",
                duration: "8 Weeks",
                rating: "4.8 (110)",
                image: "lego-robot.jpeg",
                certificate: true
            },
            {
                id: 8,
                title: "VEX Robotics",
                description: "Design and program robots with VEX platforms",
                category: "robotics",
                level: "intermediate",
                duration: "10 Weeks",
                rating: "4.6 (95)",
                image: "vex-robot.jpeg",
                certificate: true
            },
            {
                id: 9,
                title: "Arduino Electronics",
                description: "Learn electronics and programming with Arduino",
                category: "robotics",
                level: "intermediate",
                duration: "12 Weeks",
                rating: "4.7 (130)",
                image: "arduino.jpg",
                certificate: true
            },
            {
                id: 10,
                title: "Open Source Robotics",
                description: "Advanced robotics with ROS",
                category: "robotics",
                level: "advanced",
                duration: "14 Weeks",
                rating: "4.9 (75)",
                image: "ros.jpeg",
                certificate: true
            },
            
            // Mobile and Modern Tech
            {
                id: 11,
                title: "Mobile App Development",
                description: "Build apps with Flutter framework",
                category: "mobile",
                level: "intermediate",
                duration: "12 Weeks",
                rating: "4.7 (140)",
                image: "mobile-app.jpeg",
                certificate: true
            },
            {
                id: 12,
                title: "Drone Technology",
                description: "Study drone programming and control",
                category: "mobile",
                level: "advanced",
                duration: "10 Weeks",
                rating: "4.5 (80)",
                image: "drone.jpeg",
                certificate: true
            },
            
            // IoT Course
            {
                id: 13,
                title: "Internet of Things (IoT)",
                description: "Build connected devices and systems",
                category: "iot",
                level: "intermediate",
                duration: "12 Weeks",
                rating: "4.8 (100)",
                image: "iot.jpg",
                certificate: true
            },
            
            // Teacher Training
            {
                id: 14,
                title: "Tech Teacher Training",
                description: "Modern teaching methods with technology",
                category: "teacher",
                level: "beginner",
                duration: "6 Weeks",
                rating: "4.9 (60)",
                image: "ttt.jpeg",
                certificate: true
            }
        ];

        // DOM Elements
        const courseGrid = document.getElementById('courseGrid');
        const categoryTabs = document.querySelectorAll('.category-tabs button');
        const levelFilter = document.getElementById('level');
        const durationFilter = document.getElementById('duration');
        const certificateFilter = document.getElementById('certificate');

        // Initialize the page with all courses
        function displayCourses(filteredCourses = courses) {
            courseGrid.innerHTML = '';
            
            filteredCourses.forEach(course => {
                const courseCard = document.createElement('div');
                courseCard.className = 'course-card';
                
                courseCard.innerHTML = `
                    <span class="level-badge">${capitalizeFirstLetter(course.level)}</span>
                    <img src="images/courses/page/${course.image}" alt="${course.title}" loading="lazy">
                    <div class="course-info">
                        <h3>${course.title}</h3>
                        <p>${course.description}</p>
                        <div class="course-details">
                            <span>🕒 ${course.duration}</span>
                            <span>⭐ ${course.rating}</span>
                        </div>
                        <button class="enroll-btn">Enroll Now</button>
                    </div>
                `;
                
                courseGrid.appendChild(courseCard);
            });
        }

        // Helper function to capitalize first letter
        function capitalizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }

        // Filter courses based on selected filters
        function filterCourses() {
            const selectedCategory = document.querySelector('.category-tabs button.active').textContent.toLowerCase();
            const selectedLevel = levelFilter.value;
            const selectedDuration = durationFilter.value;
            const selectedCertificate = certificateFilter.value;
            
            let filtered = courses;
            
            // Filter by category
            if (selectedCategory !== 'all courses') {
                if (selectedCategory === 'programming') {
                    filtered = filtered.filter(course => course.category === 'programming');
                } else if (selectedCategory === 'robotics') {
                    filtered = filtered.filter(course => course.category === 'robotics');
                } else if (selectedCategory === 'ai/ml') {
                    // For demo purposes, we'll filter AI courses by title
                    filtered = filtered.filter(course => 
                        course.title.includes('AI') || 
                        course.title.includes('Machine Learning') ||
                        course.title.includes('Roblox')
                    );
                } else if (selectedCategory === 'iot') {
                    filtered = filtered.filter(course => course.category === 'iot');
                } else if (selectedCategory === 'teacher training') {
                    filtered = filtered.filter(course => course.category === 'teacher');
                }
            }
            
            // Filter by level
            if (selectedLevel !== 'all') {
                filtered = filtered.filter(course => course.level === selectedLevel);
            }
            
            // Filter by duration (simplified for demo)
            if (selectedDuration !== 'all') {
                if (selectedDuration === 'short') {
                    filtered = filtered.filter(course => parseInt(course.duration) < 8);
                } else if (selectedDuration === 'medium') {
                    filtered = filtered.filter(course => {
                        const weeks = parseInt(course.duration);
                        return weeks >= 8 && weeks <= 12;
                    });
                } else if (selectedDuration === 'long') {
                    filtered = filtered.filter(course => parseInt(course.duration) > 12);
                }
            }
            
            // Filter by certificate
            if (selectedCertificate !== 'all') {
                const wantsCertificate = selectedCertificate === 'yes';
                filtered = filtered.filter(course => wantsCertificate ? course.certificate : !course.certificate);
            }
            
            displayCourses(filtered);
        }

        // Event listeners
        categoryTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                categoryTabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                filterCourses();
            });
        });

        levelFilter.addEventListener('change', filterCourses);
        durationFilter.addEventListener('change', filterCourses);
        certificateFilter.addEventListener('change', filterCourses);

        // Initialize the page
        displayCourses();

        // Mobile menu toggle (simplified for demo)
        document.querySelector('.hamburger').addEventListener('click', () => {
            alert('Mobile menu would open here in a full implementation');
        });
