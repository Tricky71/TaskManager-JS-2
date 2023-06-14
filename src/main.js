'use strict';

const TASK_COUNT = 3;

import {createSiteMenuTemplate} from "./modules/site-menu";
import {createSiteFilterTemplate} from "./modules/site-filter";
import {createBoardTemplate} from "./modules/site-board";
import {createTaskTemplate} from "./modules/task";
import {createTaskEditTemplate} from "./modules/task-edit";
import {createLoadMoreButton} from "./modules/load-more-btn";






const render = (container, template, place = "beforeend") => {
  container.insertAdjacentHTML(place, template);
};

const siteMainElement = document.querySelector('.main');
const siteControlElement = siteMainElement.querySelector('.main__control');

render(siteControlElement, createSiteMenuTemplate());
render(siteMainElement, createSiteFilterTemplate());
render(siteMainElement, createBoardTemplate());

const boardElement = siteMainElement.querySelector('.board');
const taskListElement = boardElement.querySelector('.board__tasks');

render(taskListElement, createTaskEditTemplate());

for (let i = 0; i <= TASK_COUNT; i++) {
  render(taskListElement, createTaskTemplate());
}

render(taskListElement, createLoadMoreButton());