export default function MemberCard({ name, role, email }){
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>{role}</p>
      <p>{email}</p>
    </div>
  );
}
