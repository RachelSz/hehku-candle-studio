import { Column } from '../../ui/Grid/Column.style';
import { Container } from '../../ui/Grid/Container.style';
import { Row } from '../../ui/Grid/Row.style';
import { TestDiv } from './Home.style';

export default function Home() {
  return (
    <Container>
      <p>Homepage</p>

      <Row>
        <Column sizes={{ mobile: 12, tablet: 6, desktop: 4 }}>
          <TestDiv>First Column - mobile: 12, tablet: 6, desktop: 4 </TestDiv>
        </Column>
        <Column sizes={{ mobile: 12, tablet: 6, desktop: 4 }}>
          <TestDiv>Second Column - mobile: 12, tablet: 6, desktop: 4 </TestDiv>
        </Column>
        <Column sizes={{ mobile: 12, tablet: 12, desktop: 4 }}>
          <Row>
            <Column sizes={{ mobile: 12, tablet: 6, desktop: 6 }}>
              <div style={{ border: '1px solid pink', background: 'pink' }}>
                Nested 1 - mobile: 12, tablet: 6, desktop: 6{' '}
              </div>
            </Column>

            <Column sizes={{ mobile: 12, tablet: 6, desktop: 6 }}>
              <div style={{ border: '1px solid orange', background: 'orange' }}>
                Nested 2 - mobile: 12, tablet: 6, desktop: 6
              </div>
            </Column>
          </Row>
        </Column>
      </Row>
      <Row>
        <Column
          sizes={{ mobile: 12, tablet: 12, desktop: { span: 4, offset: 4 } }}
        >
          <div
            style={{
              border: '1px solid purple',
              background: 'purple',
              color: 'white',
            }}
          >
            Fourth Column
          </div>
        </Column>
        <Column
          sizes={{ mobile: 12, tablet: 12, desktop: { span: 4, offset: 0 } }}
        >
          <div style={{ border: '1px solid green', background: 'green' }}>
            Fifth Column
          </div>
        </Column>
      </Row>

      <Row>
        <Column
          sizes={{ mobile: 12, tablet: 12, desktop: { span: 4, offset: 0 } }}
        >
          <div
            style={{
              border: '1px solid pink',
              background: 'pink',
              color: 'red',
            }}
          >
            6th Column
          </div>
        </Column>
        <Column
          sizes={{ mobile: 12, tablet: 12, desktop: { span: 4, offset: 8 } }}
        >
          <div
            style={{
              border: '1px solid maroon',
              background: 'maroon',
              color: 'beige',
            }}
          >
            7th Column
          </div>
        </Column>
      </Row>
    </Container>
  );
}
