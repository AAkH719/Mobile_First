let buttonToggleItems
let listItemsContainer

function init() {
    buttonToggleItems = document.getElementsByClassName('more-block')
    if(buttonToggleItems.length === 0) {
      throw new Error('Кнопка не найдена в document');
    }
    
    listItemsContainer
    listItemsContainer = document.getElementsByClassName('tours')
    
    buttonToggleItems[0].addEventListener(
      'click',
      (event) =>
        handleToggleItemsButtonClick(listItemsContainer[0], event)
    )

}

window.addEventListener("DOMContentLoaded", init);

function handleToggleItemsButtonClick(listItemsContainer, pointerEvent) {
    const classForVisibleHiddenItems = 'block--hidden-visible';
    
    if(pointerEvent.currentTarget.innerText === 'Больше туров') {
      pointerEvent.currentTarget.innerText = 'Меньше туров'
      listItemsContainer.classList.add(classForVisibleHiddenItems)
    } else {
        pointerEvent.currentTarget.innerText = 'Больше туров'
        listItemsContainer.classList.remove(classForVisibleHiddenItems)
    }
  }

