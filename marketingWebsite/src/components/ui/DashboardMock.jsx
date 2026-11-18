// Static marketing illustration only. Not a real dashboard. All numbers are sample data.
import { LayoutDashboard, Users, CalendarCheck, Wallet, ClipboardList, Settings } from "lucide-react";

const nav = [LayoutDashboard, Users, CalendarCheck, Wallet, ClipboardList, Settings];
const bars = [62, 74, 58, 81, 90, 70, 86];
const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export default function DashboardMock() {
  return (
    <div className="overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-2xl shadow-ink/15" aria-hidden="true">
      <div className="flex items-center gap-1.5 border-b border-ink/10 bg-mist px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-red-300" /><span className="h-2.5 w-2.5 rounded-full bg-sun" /><span className="h-2.5 w-2.5 rounded-full bg-brand/60" />
        <span className="ml-3 text-xs text-ink/50">School overview (sample data)</span>
      </div>
      <div className="flex">
        <div className="hidden w-14 flex-col items-center gap-4 border-r border-ink/10 py-5 sm:flex">
          {nav.map((Icon, i) => (
            <span key={i} className={`grid h-8 w-8 place-items-center rounded-lg ${i === 0 ? "bg-brand text-white" : "text-ink/40"}`}><Icon size={16} /></span>
          ))}
        </div>
        <div className="flex-1 p-4 sm:p-5">
          <div className="grid grid-cols-3 gap-3">
            {[["Students", "1,248"], ["Present today", "96.4%"], ["Fees collected", "82%"]].map(([l, v]) => (
              <div key={l} className="rounded-xl bg-mist p-3">
                <p className="text-[11px] text-ink/55">{l}</p>
                <p className="font-display text-lg font-bold sm:text-xl">{v}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-xl border border-ink/10 p-4">
            <p className="text-xs font-semibold">Weekly attendance</p>
            <div className="mt-3 flex h-28 items-end gap-2">
              {bars.map((h, i) => (
                <div key={i} className="flex flex-1 flex-col items-center gap-1">
                  <div className={`w-full rounded-t-md ${i === 4 ? "bg-sun" : "bg-brand/80"}`} style={{ height: `${h}%` }} />
                  <span className="text-[10px] text-ink/45">{days[i]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
