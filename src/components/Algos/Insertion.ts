let running: boolean = true;

const InsertionSort = async (
  arr: { id: number; value: number }[],
  speed: number,
  setIsDisabled: React.Dispatch<React.SetStateAction<boolean>>
): Promise<boolean> => {
  return await new Promise((resolve, reject) => {
    document.querySelector(".stop-btn")?.addEventListener("click", () => {
      running = false;
    });

    let i: number = 0,
      j: number = 0,
      flag: boolean = true;

    const intervalProp = setInterval(() => {
      if (!running) {
        clearInterval(intervalProp);
        resolve(true);
        setIsDisabled(false);
        running = true;
      }

      if (flag) {
        document.querySelectorAll(".green").forEach((element) => {
          element.classList.remove("green");
        });

        let first = document.querySelector(`#id${arr[j].id}`);
        let second = document.querySelector(`#id${arr[j + 1].id}`);
        second?.classList.add("green");
        first?.classList.add("green");
        flag = false;
      } else if (j < arr.length - i - 1) {
        if (arr[j].value > arr[j + 1].value) {
          let first = document.querySelector(`#id${arr[j].id}`);
          let second = document.querySelector(`#id${arr[j + 1].id}`);
          [first!.style.transform, second!.style.transform] = [
            second!.style.transform,
            first!.style.transform,
          ];
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
        j++;

        if (j !== arr.length - i - 1) {
          flag = true;
        }
      } else if (i >= arr.length) {
        resolve(true);
        clearInterval(intervalProp);
        setIsDisabled(false);
      } else {
        document.querySelectorAll(".green").forEach((element) => {
          element.classList.remove("green");
        });
        document
          .querySelector(`#id${arr[arr.length - i - 1].id}`)
          ?.classList.add("yellow");
        i++;
        j = 0;
        flag = true;
      }
    }, speed);
  });
};

export default InsertionSort;
