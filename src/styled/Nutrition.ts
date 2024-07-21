import styled from 'styled-components';

export const NutritionSearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  h2 {
    color: var(--accent-100);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
  table {
    border-radius: 10px;
    overflow: hidden;
    text-align: center;
  }
  th,
  td {
    border: 1px solid var(--accent-200);
    padding: 0.75rem 1rem;
  }
`;

export const NutritionWrapper = styled.div`
  width: 100%;
  padding: 20px;
  border-radius: 8px;
  overflow-y: scroll;
  h3 {
    margin-bottom: 0.5rem;
  }

  p:nth-child(1) {
    color: red;
  }
`;

export const NutritionHeader = styled.h2`
  margin-top: 0;
  margin-bottom: 0.5rem;
  color: #333;
`;

export const NutritionParagraph = styled.p`
  font-size: 1.5rem;
  color: var(--accent-300);
  margin-bottom: 0.25rem;
`;

export const NutritionList = styled.ul`
  list-style-type: disc;
  margin: 0;
  padding-left: 20px;
  color: #666;
`;

export const NutritionTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 1rem 0;
  color: #333;

  th,
  td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #f4f4f4;
  }

  tr:nth-child(even) {
    background-color: #f9f9f9;
  }

  tr:hover {
    background-color: #f1f1f1;
  }
`;

export const NutritionListItem = styled.li`
  font-size: 16px;
  margin-bottom: 0.5rem;
`;
