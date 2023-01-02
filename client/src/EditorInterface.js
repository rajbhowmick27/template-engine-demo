import React from "react";
import { Editor, Frame, Element } from "@craftjs/core";

import { Button } from "./components/user/Button";
import { Card, CardTop, CardBottom } from "./components/user/Card";
import { Container } from "./components/user/Container";
import { Text } from "./components/user/Text";

const EditorInterface = () => {
  return (
    <>
    <Editor
        resolver={{
          Card,
          Button,
          Text,
          Container,
          CardTop,
          CardBottom,
        }}
      >
      <Frame>
        <Element
          canvas
          is={Container}
          padding={5}
          background="#eeeeee"
          data-cy="root-container"
        >
          <Card data-cy="frame-card" />
          <Button text="Click me" size="small" data-cy="frame-button" />
          <Text fontSize={20} text="Hi world!" data-cy="frame-text" />
          <Element
            canvas
            is={Container}
            padding={6}
            background="#999999"
            data-cy="frame-container"
          >
            <Text
              size="small"
              text="It's me again!"
              data-cy="frame-container-text"
            />
          </Element>
        </Element>
      </Frame>
      </Editor>
    </>
  );
};

export default EditorInterface;
