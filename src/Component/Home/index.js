import React, { Component } from 'react';
import './index.css';

class Test extends Component {
    render() {
        return (
            <div>
                <div className="Home-header">
                    이 파일에서 CSS 1주일동안 연습하기(1주일동안 1파일만 만지기), 만약에 같은 디자인의 페이지를 다른 형식의 코드로 써보고 싶으면
                    Home폴더에 페이지만 추가하기. 
                </div>
                <div className="Home-Title">
                    
                </div>
                <div className="Home-Side">
                    사이드
                </div>
                <div className="Home-Contents">
                    <p>Personally, I don't prefer any framework over manual styling.</p>
                    <p>Especially when you're just learning, it's important to know what each css property does before you use it.</p>
                    <p>Not that I'm saying you should stay away from things like bootstrap etc, but everytime I use these frameworks these problems arise in my personal experience:</p>
                    <p>1.I'm overriding bootstrap components and I encounter multiple CSS bugs.</p>
                    <p>2.I get limited in my creativity for my layout when using a framework.</p>
                    <p>Css grid (not supported everywhere) and flexbox solve most of my problems I have that a column based grid system in Bootstrap also does.</p>
                    <p>My suggestion would be to deeply learn CSS, or SCSS, and maybe use styled-components in your React components.</p>
                    <p>Ever since I have been using it I notice I choose my CSS very carefully, so that every line is effecient and I write less code.</p>
                    <p>But I can understand if you prefer otherwise, maybe you just want to focus on functionality and a CSS framework lets you get your feet wet in your logic very quickly.</p>
                    <p>Css grid와 flexbox 사용하는거 연습해</p>
                    </div>
                <div className="Home-Footer">
                    푸터
                </div>
                <div className="wrapper">
                    <div className="header">Header</div>
                    <div className="menu">Menu</div>
                    <div className="content">Content</div>
                    <div className="footer">Footer</div>
                </div>
            </div>
        )
    }
};

export default Test;
