import {
  PageDescriptionZone,
  PageForm,
  PageInner,
  PageSearchZone,
  PageWrapper,
} from '../styled/Common';

export default function FoodInfo() {
  return (
    <PageWrapper>
      <PageForm>
        <input type="text" disabled={true} />
        <button type="submit" disabled={true}>
          Submit
        </button>
      </PageForm>
      <PageInner>
        <PageSearchZone>
          <p>API can not use</p>
        </PageSearchZone>
        <PageDescriptionZone></PageDescriptionZone>
      </PageInner>
    </PageWrapper>
  );
}
