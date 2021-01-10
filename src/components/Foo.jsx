import { ref, computed } from 'vue'

export const Foo = {
  setup() {
    const count = ref(0)
    const double = x => x * 2

    const doubled = computed(() => count.value |> double)

    return () => (
      <>
        <div>Count: {count.value}</div>
        <button onClick={() => count.value += 1}>Inc</button>
        <div>Double: {doubled.value}</div>
      </>
    )
  }
}
