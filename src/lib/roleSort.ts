interface RoleTagged {
  roles?: string[]
}

export function filterByRole<T extends RoleTagged>(items: T[], activeRole: string | null): T[] {
  if (!activeRole) return items

  const matched = items.filter((item) => item.roles?.includes(activeRole))
  return matched.length > 0 ? matched : items
}

export function sortByRole<T extends RoleTagged>(items: T[], activeRole: string | null): T[] {
  if (!activeRole) return items

  return [...items]
    .map((item, index) => ({ item, index }))
    .sort((a, b) => {
      const aMatches = a.item.roles?.includes(activeRole) ? 0 : 1
      const bMatches = b.item.roles?.includes(activeRole) ? 0 : 1
      if (aMatches !== bMatches) return aMatches - bMatches
      return a.index - b.index
    })
    .map(({ item }) => item)
}
