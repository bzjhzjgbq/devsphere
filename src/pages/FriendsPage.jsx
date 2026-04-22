import { useMemo, useState } from "react";
import Card from "../components/ui/Card";
import UserPageLayout from "../components/user/UserPageLayout";
import { currentUserProfile } from "../data/mockUsers";

const groupOrder = ["竞赛组队", "产品搭子", "实验室伙伴"];

export default function FriendsPage() {
  const [activeFriendId, setActiveFriendId] = useState(currentUserProfile.friendList[0]?.id || "");

  const groupedFriends = useMemo(() => {
    const map = new Map();

    currentUserProfile.friendList.forEach((friend) => {
      const groupName = friend.status === "在线" ? friend.group : "离线好友";
      if (!map.has(groupName)) {
        map.set(groupName, []);
      }
      map.get(groupName).push(friend);
    });

    return [...map.entries()].sort((a, b) => {
      const aIndex = groupOrder.indexOf(a[0]);
      const bIndex = groupOrder.indexOf(b[0]);
      return (aIndex === -1 ? 999 : aIndex) - (bIndex === -1 ? 999 : bIndex);
    });
  }, []);

  const activeFriend =
    currentUserProfile.friendList.find((friend) => friend.id === activeFriendId) ||
    currentUserProfile.friendList[0];

  return (
    <UserPageLayout
      title="好友"
      description="这个页面按 QQ 好友列表的思路重做，左侧按分组和在线状态展示，右侧突出好友详情和社交感。"
    >
      <div className="grid gap-6 xl:grid-cols-[340px_minmax(0,1fr)]">
        <Card className="overflow-hidden p-0">
          <div className="border-b border-slate-200 bg-slate-50/80 px-5 py-4">
            <p className="eyebrow">好友列表</p>
            <h2 className="mt-2 text-[22px] font-semibold tracking-[-0.03em] text-slate-950">校园联系人</h2>
          </div>

          <div className="max-h-[640px] overflow-y-auto">
            {groupedFriends.map(([groupName, friends]) => (
              <div key={groupName} className="border-b border-slate-100 last:border-b-0">
                <div className="flex items-center justify-between bg-slate-50/70 px-5 py-3 text-sm font-medium text-slate-700">
                  <span>{groupName}</span>
                  <span className="text-xs text-slate-500">{friends.length} 人</span>
                </div>
                <div className="space-y-1 p-2">
                  {friends.map((friend) => (
                    <button
                      key={friend.id}
                      type="button"
                      onClick={() => setActiveFriendId(friend.id)}
                      className={`flex w-full items-center gap-3 rounded-2xl px-3 py-3 text-left transition duration-200 ${
                        activeFriend?.id === friend.id
                          ? "bg-sky-50 ring-1 ring-sky-200"
                          : "hover:bg-slate-50"
                      }`}
                    >
                      <img
                        src={friend.avatar}
                        alt={friend.nickname}
                        className="h-12 w-12 rounded-2xl object-cover"
                      />
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          <p className="truncate text-sm font-medium text-slate-900">{friend.nickname}</p>
                          <span className={`text-xs ${friend.status === "在线" ? "text-emerald-600" : "text-slate-500"}`}>
                            {friend.status}
                          </span>
                        </div>
                        <p className="mt-1 truncate text-xs text-slate-500">{friend.bio}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
            <img
              src={activeFriend.avatar}
              alt={activeFriend.nickname}
              className="h-24 w-24 rounded-[28px] object-cover ring-1 ring-slate-200"
            />
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-3">
                <h2 className="text-[32px] font-semibold tracking-[-0.05em] text-slate-950">
                  {activeFriend.nickname}
                </h2>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${
                    activeFriend.status === "在线"
                      ? "bg-emerald-50 text-emerald-700"
                      : "bg-slate-100 text-slate-600"
                  }`}
                >
                  {activeFriend.status}
                </span>
              </div>
              <p className="mt-2 text-sm text-slate-500">
                {activeFriend.level} · {activeFriend.group}
              </p>
              <p className="mt-4 text-sm leading-8 text-slate-600">{activeFriend.bio}</p>
              <div className="mt-5 rounded-[24px] border border-slate-200 bg-slate-50/80 p-4">
                <p className="text-xs text-slate-500">个性签名</p>
                <p className="mt-2 text-sm leading-7 text-slate-700">{activeFriend.motto}</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </UserPageLayout>
  );
}
