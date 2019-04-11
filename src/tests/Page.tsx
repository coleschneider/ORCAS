import * as React from 'react';
import { BrowserRouter, Router, StaticRouter } from "react-router-dom";
import App from "../App";
import { MemoryRouter, Route } from "react-router";
import { ReactWrapper } from 'enzyme';
import { render } from 'react-testing-library';
import { createMemoryHistory } from 'history';



export class Pager {
  page: ReactWrapper
  constructor(){
    this.page = this.createPage();
  }
  createPage(
    pathname?: string,
    search?:string,
    pathToMatch:string = "/",
    initialEntries:string[] = [pathname + search],
    initialIndex?: number,
  ){
    document.body.innerHTML = '<div id="root"></div>';
    const options = {
      attachTo: document.getElementById('root')
  }
  
    const Page = mount(
      <MemoryRouter initialEntries={initialEntries} initialIndex={initialIndex}>  
        <Route path={pathToMatch} component={App} />
      </MemoryRouter>, options)
    return Page
  }
  navigate(url: string){
    return this.page.find('Router').props().history
  }
  resize(width: number){
    global.innerWidth = width;
    global.dispatchEvent(new Event('resize'));
  }
  scroll(amount: number){
    global.scrollY = amount;
    global.dispatchEvent(new Event('scroll'));
  }
getHeader(){
  return this.page.find('[test-id="header"]')
}
getNav(){
  return this.page.find('[test-id="mobileHeader-nav"]')
}
getSection(selector: string){
  return this.page.find(`.s-${selector}`)
  }


}
