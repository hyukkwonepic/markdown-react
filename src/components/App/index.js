import React, { Component } from "react";
import Header from "../Header";
import Editor from "../Editor";
import Preview from "../Preview";
import "./index.css";

// 마크다운 에디터를 품고있는 main 컴포넌트
class App extends Component {
    // 리액트 컴포넌트의 state
    state = {
        editor: "" // 관리되는 데이터인 editor.
    }
    
    // 리액트 lifecycle method.
    // 컴포넌트가 mount되기 전 호출됩니다.
    componentWillMount() {
        // 브라우저 로컬스토리지의 content를 조회하여
        if (window.localStorage.content) {
            this.setState({
                editor: window.localStorage.content  // 해당 데이터를 컴포넌트의 editor에 저장합니다.
            })
        }
    }

    // Editor 컴포넌트에 제공되는 method.
    handleEditorInput(e) {
        this.setState({ editor: e.target.value }); // synthetic event에 담긴 사용자 입력값에 접근하여 해당 데이터를 App 컴포넌트의 state에 저장합니다.
        window.localStorage.setItem("content", e.target.value); // 또한 해당 데이터를 브라우저 localStorage에도 저장합니다. 브라우저 탭을 닫았다가 다시 켜도 내용이 사라지지 않기 위함입니다.
    }

    render() {
        return (
            <div className="app">
                <Header
                    title={"혁우의 에디터!"}
                />
                <div className="editor-group">
                    <Editor
                        onInputChange={(e) => this.handleEditorInput(e)} // 메소드 제공
                        editorValue={this.state.editor} // value 제공
                    />
                    <Preview
                        inputValue={this.state.editor} // value 제공
                    />
                </div>
            </div>
        );
    }
}

export default App;