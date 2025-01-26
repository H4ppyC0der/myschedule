import { create } from "zustand";
import { usersData } from "@/data/data";

export const useAgentStore = create((set) => ({
    column: 0,
    currentFilter: "",
    page: 0,
    agents: usersData.schedule.slice(0, 6),
    addAgent: (newAgent) =>
        set((state) => ({ agents: [...state.agents, newAgent] })),
    removeAgent: (agentID) =>
        set((state) => ({
            agents: state.agents.filter((agent) => agent.id !== agentID),
        })),
    setAgents: (newAgents) => set((state) => ({ agents: newAgents })),
    setColumn: (newColumn) => set((state) => ({ column: newColumn })),
    cleaPage: () => set({ page: 0 }),
    clearSchedule: () => set({ agents: [] }),
    setFilter: (newFilter) => set({ currentFilter: newFilter }),
    clearFilter: () => set({ currentFilter: "" }),
    addPage: () =>
        set((state) => ({
            page:
                state.page >= usersData.schedule.length
                    ? state.page + 1
                    : state.page + state.column,
        })),

    minusPage: () =>
        set((state) => ({
            page:
                state.page <= 0 ? (state.page = 0) : state.page - state.column,
        })),

    nextAgentData: () =>
        set((state) => ({
            agents: state.currentFilter
                ? usersData.schedule
                      .filter(
                          (agent) =>
                              String(agent.id) ===
                                  String(state.currentFilter) ||
                              String(agent.client) ===
                                  String(state.currentFilter)
                      )
                      .slice(page, page + state.column)
                : usersData.schedule.slice(
                      state.page,
                      state.page + state.column > usersData.schedule.length
                          ? usersData.schedule.length + 1
                          : state.page + state.column
                  ),
        })),

    prevAgentData: () =>
        set((state) => ({
            agents: state.currentFilter
                ? usersData.schedule
                      .filter(
                          (agent) =>
                              String(agent.id) ===
                                  String(state.currentFilter) ||
                              String(agent.client) ===
                                  String(state.currentFilter)
                      )
                      .slice(page, page + state.column)
                : usersData.schedule.slice(
                      state.page,
                      state.page + state.column
                  ),
        })),
}));
