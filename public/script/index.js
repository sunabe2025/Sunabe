    

        const scheduleTop = [
            { startHour: 3, image: "images/heizitu16.gif" },
            { startHour: 14, image: "images/heizitu16.gif" },
            { startHour: 15, image: "images/heizitu16.gif" },
            { startHour: 18, image: "images/heizitu16.gif" }
        ];

        function getTopImageForTime() {
            const now = new Date();
            const hour = now.getHours();
            for (let i = scheduleTop.length - 1; i >= 0; i--) {
                if (hour >= scheduleTop[i].startHour) return scheduleTop[i].image;
            }
            return scheduleTop[0].image;
        }

        function updateTopSlideshow() {
            const topImage = document.getElementById("slideshow-top");
            if (topImage) topImage.src = getTopImageForTime();
        }

        updateTopSlideshow();
        setInterval(updateTopSlideshow, 10 * 60 * 1000);


        const scheduleInfo = [
            { startHour: 0, image: "images/atti90.jpg" },
            { startHour: 1, image: "images/atti89.jpg" },
            { startHour: 2, image: "images/atti88.jpg" },
            { startHour: 3, image: "images/atti87.jpg" },
            { startHour: 4, image: "images/atti86.jpg" },
            { startHour: 5, image: "images/atti1.jpg" },
            { startHour: 6, image: "images/atti90.jpg" },
            { startHour: 7, image: "images/atti89.jpg" },
            { startHour: 8, image: "images/atti88.jpg" },
            { startHour: 9, image: "images/atti87.jpg" },
            { startHour: 10, image: "images/atti86.jpg" },
            { startHour: 12, image: "images/atti1.jpg" },
            { startHour: 13, image: "images/atti90.jpg" },
            { startHour: 14, image: "images/atti89.jpg" },
            { startHour: 15, image: "images/atti87.jpg" },
            { startHour: 16, image: "images/atti88.jpg" },
            { startHour: 17, image: "images/atti1.jpg" },
            { startHour: 18, image: "images/atti86.jpg" },
            { startHour: 19, image: "images/atti87.jpg" },
            { startHour: 20, image: "images/atti88.jpg" },
            { startHour: 21, image: "images/atti89.jpg" },
            { startHour: 22, image: "images/atti90.jpg" },
            { startHour: 23, image: "images/atti1.jpg" },
        ];

        const schedule1 = [
            { startHour: 0, image: "images/hifu1-3.gif" },
            { startHour: 1, image: "images/hifu2-3.gif" },
            { startHour: 2, image: "images/hifu3-3.gif" },
            { startHour: 3, image: "images/hifu4-3.gif" },
            { startHour: 4, image: "images/hifu4-3.gif" },
            { startHour: 5, image: "images/hifu5-3.gif" },
            { startHour: 6, image: "images/hifu6-3.gif" },
            { startHour: 7, image: "images/hifu7-3.gif" },
            { startHour: 8, image: "images/hifu8-3.gif" },
            { startHour: 9, image: "images/hifu6-3.gif" },
            { startHour: 10, image: "images/hifu9-3.gif" },
            { startHour: 11, image: "images/hifu10-3.gif" },
            { startHour: 12, image: "images/hifu11-3.gif" },
            { startHour: 13, image: "images/hifu12-3.gif" },
            { startHour: 14, image: "images/hifu13-3.gif" },
            { startHour: 15, image: "images/hifu12-3.gif" },
            { startHour: 16, image: "images/hifu1-3.gif" },
            { startHour: 17, image: "images/hifu2-3.gif" },
            { startHour: 18, image: "images/hifu3-3.gif" },
            { startHour: 19, image: "images/hifu4-3.gif" },
            { startHour: 20, image: "images/hifu5-3.gif" },
            { startHour: 21, image: "images/hifu6-3.gif" },
            { startHour: 22, image: "images/hifu7-3.gif" },
            { startHour: 23, image: "images/hifu8-3.gif" }

        ];


        const schedule2 = [


            { startHour: 0, image: "images/18-1ks.gif" },
            { startHour: 1, image: "images/18-2ks.gif" },
            { startHour: 2, image: "images/18-3ks.gif" },
            { startHour: 3, image: "images/18-4ks.gif" },
            { startHour: 4, image: "images/18-5ks.gif" },
            { startHour: 5, image: "images/18-1ks.gif" },
            { startHour: 6, image: "images/18-2ks.gif" },
            { startHour: 7, image: "images/18-3ks.gif" },
            { startHour: 8, image: "images/18-4ks.gif" },
            { startHour: 9, image: "images/18-5ks.gif" },
            { startHour: 10, image: "images/21-1ks.gif" },
            { startHour: 11, image: "images/21-2ks.gif" },
            { startHour: 12, image: "images/21-3ks.gif" },
            { startHour: 13, image: "images/21-4ks.gif" },
            { startHour: 14, image: "images/21-5ks.gif" },
            { startHour: 15, image: "images/18-1ks.gif" },
            { startHour: 16, image: "images/18-2ks.gif" },
            { startHour: 17, image: "images/18-4ks.gif" },
            { startHour: 18, image: "images/21-1ks.gif" },
            { startHour: 19, image: "images/21-2ks.gif" },
            { startHour: 20, image: "images/21-3ks.gif" },
            { startHour: 21, image: "images/21-4ks.gif" },
            { startHour: 22, image: "images/21-5ks.gif" },
            { startHour: 23, image: "images/18-5ks.gif" },
        ];


        const schedule3 = [
            { startHour: 0, image: "images/kans1.jpg" },
            { startHour: 1, image: "images/kans2.jpg" },
            { startHour: 2, image: "images/kans3.jpg" },
            { startHour: 3, image: "images/kans4.jpg" },
            { startHour: 4, image: "images/kans5.jpg" },
            { startHour: 5, image: "images/kans6.jpg" },
            { startHour: 6, image: "images/kans7.jpg" },
            { startHour: 7, image: "images/kans8.jpg" },
            { startHour: 8, image: "images/kans9.jpg" },
            { startHour: 9, image: "images/kans10.jpg" },
            { startHour: 10, image: "images/kans1.jpg" },
            { startHour: 11, image: "images/kans2.jpg" },
            { startHour: 12, image: "images/kans3.jpg" },
            { startHour: 13, image: "images/kans4.jpg" },
            { startHour: 14, image: "images/kans5.jpg" },
            { startHour: 15, image: "images/kans6.jpg" },
            { startHour: 16, image: "images/kans7.jpg" },
            { startHour: 17, image: "images/kans8.jpg" },
            { startHour: 18, image: "images/kans9.jpg" },
            { startHour: 19, image: "images/kans10.jpg" },
            { startHour: 20, image: "images/kans1.jpg" },
            { startHour: 21, image: "images/kans2.jpg" },
            { startHour: 22, image: "images/kans3.jpg" },
            { startHour: 23, image: "images/kans4.jpg" },
            { startHour: 24, image: "images/kans5.jpg" }

        ];

        const schedule4 = [
            { startHour: 0, image: "images/dm1s.jpg" },
            { startHour: 1, image: "images/dm2s.jpg" },
            { startHour: 2, image: "images/dm3s.jpg" },
            { startHour: 3, image: "images/dm4s.jpg" },
            { startHour: 4, image: "images/dm5s.jpg" },
            { startHour: 5, image: "images/dm3s.jpg" },
            { startHour: 6, image: "images/dm6s.jpg" },
            { startHour: 7, image: "images/dm7s.jpg" },
            { startHour: 8, image: "images/dm1s.jpg" },
            { startHour: 9, image: "images/dm2s.jpg" },
            { startHour: 10, image: "images/dm3s.jpg" },
            { startHour: 11, image: "images/dm4s.jpg" },
            { startHour: 12, image: "images/dm5s.jpg" },
            { startHour: 13, image: "images/dm6s.jpg" },
            { startHour: 14, image: "images/dm7s.jpg" },
            { startHour: 15, image: "images/dm1s.jpg" },
            { startHour: 16, image: "images/dm2s.jpg" },
            { startHour: 17, image: "images/dm3s.jpg" },
            { startHour: 18, image: "images/dm4s.jpg" },
            { startHour: 19, image: "images/dm5s.jpg" },
            { startHour: 20, image: "images/dm6s.jpg" },
            { startHour: 21, image: "images/dm7s.jpg" },
            { startHour: 22, image: "images/dm5s.jpg" },
            { startHour: 23, image: "images/dm6s.jpg" },
            { startHour: 24, image: "images/dm7s.jpg" }
        ];


        const schedule5 = [
            { startHour: 0, image: "images/lip4s.jpg" },
            { startHour: 1, image: "images/lip5s.jpg" },
            { startHour: 2, image: "images/lip6s.jpg" },
            { startHour: 3, image: "images/lip7s.jpg" },
            { startHour: 4, image: "images/lip4s.jpg" },
            { startHour: 5, image: "images/lip5s.jpg" },
            { startHour: 6, image: "images/lip6s.jpg" },
            { startHour: 7, image: "images/lip7s.jpg" },
            { startHour: 8, image: "images/lip4s.jpg" },
            { startHour: 9, image: "images/lip5s.jpg" },
            { startHour: 10, image: "images/lip6s.jpg" },
            { startHour: 11, image: "images/lip7s.jpg" },
            { startHour: 12, image: "images/lip4s.jpg" },
            { startHour: 13, image: "images/lip5s.jpg" },
            { startHour: 14, image: "images/lip6s.jpg" },
            { startHour: 15, image: "images/lip7s.jpg" },
            { startHour: 16, image: "images/lip4s.jpg" },
            { startHour: 17, image: "images/lip5s.jpg" },
            { startHour: 18, image: "images/lip6s.jpg" },
            { startHour: 19, image: "images/lip7s.jpg" },
            { startHour: 20, image: "images/lip4s.jpg" },
            { startHour: 21, image: "images/lip5s.jpg" },
            { startHour: 22, image: "images/lip6s.jpg" },
            { startHour: 23, image: "images/lip7s.jpg" }
        ];



        const schedule6 = [
            { startHour: 0, image: "images/diet1s.jpg" },
            { startHour: 1, image: "images/diet2s.jpg" },
            { startHour: 2, image: "images/diet3s.jpg" },
            { startHour: 3, image: "images/diet4s.jpg" },
            { startHour: 4, image: "images/diet5s.jpg" },
            { startHour: 5, image: "images/diet6s.jpg" },
            { startHour: 6, image: "images/diet7s.jpg" },
            { startHour: 7, image: "images/diet8s.jpg" },
            { startHour: 8, image: "images/diet9s.jpg" },
            { startHour: 9, image: "images/diet23s.jpg" },
            { startHour: 10, image: "images/diet24s.jpg" },
            { startHour: 11, image: "images/diet25s.jpg" },
            { startHour: 12, image: "images/diet26s.jpg" },
            { startHour: 13, image: "images/diet1s.jpg" },
            { startHour: 14, image: "images/diet2s.jpg" },
            { startHour: 15, image: "images/diet3s.jpg" },
            { startHour: 16, image: "images/diet4s.jpg" },
            { startHour: 17, image: "images/diet5s.jpg" },
            { startHour: 18, image: "images/diet6s.jpg" },
            { startHour: 19, image: "images/diet7s.jpg" },
            { startHour: 20, image: "images/diet8s.jpg" },
            { startHour: 21, image: "images/diet9s.jpg" },
            { startHour: 22, image: "images/diet23s.jpg" },
            { startHour: 23, image: "images/diet24s.jpg" }
        ];


        const schedule7 = [
            { startHour: 0, image: "images/ketuatu9s.jpg" },
            { startHour: 1, image: "images/ketuatu10s.jpg" },
            { startHour: 2, image: "images/ketuatu11s.jpg" },
            { startHour: 3, image: "images/ketuatu12s.jpg" },
            { startHour: 4, image: "images/ketuatu9s.jpg" },
            { startHour: 5, image: "images/ketuatu10s.jpg" },
            { startHour: 6, image: "images/ketuatu11s.jpg" },
            { startHour: 7, image: "images/ketuatu12s.jpg" },
            { startHour: 8, image: "images/ketuatu9s.jpg" },
            { startHour: 9, image: "images/ketuatu10s.jpg" },
            { startHour: 10, image: "images/ketuatu11s.jpg" },
            { startHour: 11, image: "images/ketuatu12s.jpg" },
            { startHour: 12, image: "images/ketuatu9s.jpg" },
            { startHour: 13, image: "images/ketuatu10s.jpg" },
            { startHour: 14, image: "images/ketuatu11s.jpg" },
            { startHour: 15, image: "images/ketuatu12s.jpg" },
            { startHour: 16, image: "images/ketuatu9s.jpg" },
            { startHour: 17, image: "images/ketuatu10s.jpg" },
            { startHour: 18, image: "images/ketuatu11s.jpg" },
            { startHour: 19, image: "images/ketuatu12s.jpg" },
            { startHour: 20, image: "images/ketuatu9s.jpg" },
            { startHour: 21, image: "images/ketuatu10s.jpg" },
            { startHour: 22, image: "images/ketuatu11s.jpg" },
            { startHour: 23, image: "images/ketuatu12s.jpg" }
        ];


        const schedule8 = [

            { startHour: 0, image: "images/tabe1.gif" },
            { startHour: 1, image: "images/tabe2.gif" },
            { startHour: 2, image: "images/tabe3.gif" },
            { startHour: 3, image: "images/tabe4.gif" },
            { startHour: 4, image: "images/tabe5.gif" },
            { startHour: 5, image: "images/tabe6.gif" },
            { startHour: 6, image: "images/tabe7.gif" },
            { startHour: 7, image: "images/tabe8.gif" },
            { startHour: 8, image: "images/tabe9.gif" },
            { startHour: 9, image: "images/tabe10.gif" },
            { startHour: 10, image: "images/tabe11.gif" },
            { startHour: 11, image: "images/tabe12.gif" },
            { startHour: 12, image: "images/tabe13.gif" },
            { startHour: 13, image: "images/tabe14.gif" },
            { startHour: 14, image: "images/tabe15.gif" },
            { startHour: 15, image: "images/tabe16.gif" },
            { startHour: 16, image: "images/tabe17.gif" },
            { startHour: 17, image: "images/tabe18.gif" },
            { startHour: 18, image: "images/tabe19.gif" },
            { startHour: 19, image: "images/tabe20.gif" },
            { startHour: 20, image: "images/tabe1.gif" },
            { startHour: 21, image: "images/tabe2.gif" },
            { startHour: 22, image: "images/tabe3.gif" },
            { startHour: 23, image: "images/tabe4.gif" },
            { startHour: 24, image: "images/tabe5.gif" }


        ];


        function getImageForSchedule(schedule) {
            const now = new Date();
            const hour = now.getHours();
            for (let i = schedule.length - 1; i >= 0; i--) {
                if (hour >= schedule[i].startHour) return schedule[i].image;
            }
            return schedule[schedule.length - 1].image;
        }
        const slideshowIds = [
            ["slideshow-info", scheduleInfo],
            ["slideshow-1", schedule1],
            ["slideshow-2", schedule2],
            ["slideshow-3", schedule3],
            ["slideshow-4", schedule4],
            ["slideshow-5", schedule5],
            ["slideshow-6", schedule6],
            ["slideshow-7", schedule7],
            ["slideshow-8", schedule8],
        ];

        function updateAllSlideshows() {
            slideshowIds.forEach(([id, schedule]) => {
                const element = document.getElementById(id);
                if (element) element.src = getImageForSchedule(schedule);
            });
        }


        // 初期表示
        updateAllSlideshows();

        // 必要に応じて、定期更新も可能
        setInterval(updateAllSlideshows, 10 * 60 * 1000); // 10分ごとに更新
    

    
        document.addEventListener("DOMContentLoaded", () => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("show");
                    }
                });
            });

            document.querySelectorAll(".fade-up").forEach(el => observer.observe(el));
        });
