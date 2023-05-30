import { Link } from 'react-router-dom';

export function ListTrend({ trends }) {
  return trends.map(({ title, id }) => (
    <li key={id}>
      <Link to="#">{title}</Link>
    </li>
  ));
}
