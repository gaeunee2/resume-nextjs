import { Fragment, PropsWithChildren } from 'react';
import { Row, Col } from 'reactstrap';
import { IRow } from './IRow';
import { Style } from './Style';
import { CommonDescription } from './CommonDescription';

// subTitle 내 개행문자(\n)를 <br/> 로 렌더링하고, http(s) URL 토큰은 링크로 변환
function renderLine(line: string) {
  return line.split(/(\s+)/).map((token, index) => {
    if (/^https?:\/\//.test(token)) {
      return (
        <a key={index.toString()} href={token} target="_blank" rel="noopener noreferrer">
          {token}
        </a>
      );
    }
    return <Fragment key={index.toString()}>{token}</Fragment>;
  });
}

function renderMultiline(text: string) {
  return text.split('\n').map((line, index) => (
    <Fragment key={index.toString()}>
      {index > 0 ? <br /> : null}
      {renderLine(line)}
    </Fragment>
  ));
}

export function CommonRows({
  index,
  payload,
}: PropsWithChildren<{ payload: IRow.Payload; index: number }>) {
  const { left, right } = payload;

  const isNeedDescriptionPadding = !!(right.title || right.subTitle);

  return (
    <div>
      {index > 0 ? <hr /> : ''}
      <Row>
        <Col sm={12} md={3} className="text-md-right">
          <Row>
            <Col md={12}>
              <h4 style={Style.gray}>{left.title}</h4>
            </Col>
            {left.subTitle ? <Col md={12}>{left.subTitle}</Col> : ''}
          </Row>
        </Col>
        <Col sm={12} md={9}>
          {right.title ? <h4>{right.title}</h4> : ''}
          {right.subTitle ? <i style={Style.gray}>{renderMultiline(right.subTitle)}</i> : ''}
          {right.descriptions ? (
            <CommonDescription
              descriptions={right.descriptions}
              option={{ padding: isNeedDescriptionPadding }}
            />
          ) : (
            ''
          )}
        </Col>
      </Row>
    </div>
  );
}
