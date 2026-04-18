import Card from "../ui/Card";
import Badge from "../ui/Badge";

export default function ActiveUserList({ users }) {
  return (
    <div className="grid gap-4">
      {users.map((user) => (
        <Card
          key={user.id}
          className="p-5 transition duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-[0_1px_2px_rgba(15,23,42,0.05),0_18px_40px_rgba(15,23,42,0.08)]"
        >
          <div className="flex items-start gap-4">
            <img
              src={user.avatar}
              alt={user.name}
              className="h-14 w-14 rounded-2xl object-cover ring-1 ring-slate-200"
            />
            <div className="min-w-0 flex-1">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-base font-semibold text-slate-950">{user.name}</h3>
                  <p className="mt-1 text-sm text-slate-500">{user.role}</p>
                </div>
                <div className="rounded-xl bg-slate-950 px-2.5 py-1 text-xs font-semibold text-white shadow-sm">
                  {user.score}
                </div>
              </div>
              <p className="mt-3 text-sm leading-7 text-slate-600">{user.summary}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {user.tags.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
