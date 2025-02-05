
    const container = document.getElementById('images');
    const scrollamount=200;

    document.getElementById('left').addEventListener('click', () => {
        images.scrollLeft -= scrollamount;
    });

     document.getElementById('right').addEventListener('click', () => {
        images.scrollLeft += scrollamount;
    });
    const learnMoreBtn = document.getElementById('learnmorebtn');
    const moreContent = document.getElementById('learnmore');

    learnMoreBtn.addEventListener('click', function() {
    
            if (moreContent.style.display === 'none') {
        moreContent.style.display = 'block';
        learnMoreBtn.textContent='Learn Less';
            } else {
        moreContent.style.display = 'none';
        learnMoreBtn.textContent='Learn More';
    
        }
      });
    const learnMorebtn2 = document.getElementById('learnmorebtn2');
    const moreContent2 = document.getElementById('learnmore2');

    learnMorebtn2.addEventListener('click', function() {
    
            if (moreContent2.style.display === 'none') {
        moreContent2.style.display = 'block'; 
        learnMorebtn2.textContent='Learn Less';
            } else {
        moreContent2.style.display = 'none';
        learnMorebtn2.textContent = "Learn More";
        }
      });
    const seemore = document.getElementById('seemore');
    const moreContent3 = document.getElementById('staff');

    seemore.addEventListener('click', function() {
    
            if (moreContent3.style.display === 'none') {
        moreContent3.style.display = 'grid';
        seemore.textContent='See Less';
    moreContent3.style;
            } else {
        moreContent3.style.display = 'none';
        seemore.textContent = "See Less";
        }
      });

