const data = [
    {
      id: "1",
      questions: "What are accordion components?",
      answer:
        "Accordion components are UI elements that allow users to expand and collapse sections of content. They are useful for organizing content into a compact and manageable format.",
    },
    {
      id: "2",
      questions: "How does an accordion component work?",
      answer:
        "An accordion component typically works by hiding or showing content sections when a user interacts with a header or trigger element. Clicking on a header will expand or collapse the associated content section.",
    },
    {
      id: "3",
      questions: "What are the common use cases for accordions?",
      answer:
        "Common use cases for accordions include FAQs, menus, forms, and content organization on websites and applications where space management is crucial.",
    },
    {
      id: "4",
      questions: "What are the key features of a well-designed accordion?",
      answer:
        "Key features of a well-designed accordion include smooth transitions, clear indicators for expandable sections, and the ability to handle multiple expanded sections or limit to a single expanded section at a time.",
    },
    {
      id: "5",
      questions:
        "Are there any accessibility considerations for accordion components?",
      answer:
        "Yes, accessibility considerations for accordion components include ensuring proper keyboard navigation, providing ARIA roles and states, and ensuring that content within the accordion is accessible to screen readers.",
    },
    {
      id: "6",
      questions: "Can accordion components be styled with CSS?",
      answer:
        "Yes, accordion components can be styled with CSS to match the look and feel of a website or application. CSS can be used to control the appearance of headers, content sections, and transitions.",
    },
    {
      id: "7",
      questions: "How can I implement an accordion component in JavaScript?",
      answer:
        "An accordion component can be implemented in JavaScript by toggling the visibility of content sections when a user clicks on a header. This can be achieved using event listeners and manipulating CSS classes or styles.",
    },
  ];
  
  const accordionWrapper = document.querySelector(".accordion");
  
  function createAccordionData() {
    accordionWrapper.innerHTML = data
      .map(
        (dataItem) => `
          <div class="accordion_item">
            <div class="accordion_title">
              <h3>${dataItem.questions}</h3>
              <i class="fa-solid fa-arrow-up"></i>
            </div>
            <div class="accordion_content">
              <p>${dataItem.answer}</p>
            </div>
          </div>
        `
      )
      .join("");
  }
  
  createAccordionData();
  
  const accordionItems = document.querySelectorAll('.accordion_item');

  // Add click event listener to each accordion title
  accordionItems.forEach(item => {
    const title = item.querySelector('.accordion_title');
    
    title.addEventListener('click', () => {
      // Toggle the 'active' class on the current accordion item
      item.classList.toggle('active');
      
      // If you want to close other accordions when one is opened:
      accordionItems.forEach(otherItem => {
        if (otherItem !== item && otherItem.classList.contains('active')) {
          otherItem.classList.remove('active');
        }
      });
    });
  });
  