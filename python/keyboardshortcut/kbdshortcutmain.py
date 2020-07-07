import pyperclip
from pynput import keyboard

# The currently active modifiers
current = set()
# The key combination to check
COMBINATIONS = [
    {keyboard.Key.shift}
    # {keyboard.Key.shift, keyboard.KeyCode(char='A')}
    # {keyboard.KeyCode(char='a'), keyboard.Key.shift},
    # {keyboard.KeyCode(char='A'), keyboard.Key.shift}
]


def execute():
    text = "Observed Result:\n"
    print(text)
    # w = win32gui
    # print(w.GetWindowText(w.GetForegroundWindow()))
    # print(w.GetCursorPos())
    # The below 2 lines will insert the text value on press of shift key. Not relevant with the subsequent lines
    # handler = w.WindowFromPoint(w.GetCursorPos())
    # w.SendMessage(handler, win32con.EM_REPLACESEL, 0, text)
    pyperclip.copy(text)
    # pyperclip.paste()


def on_press(key):
    if any([key in COMBO for COMBO in COMBINATIONS]):
        current.add(key)
        if any(all(k in current for k in COMBO) for COMBO in COMBINATIONS):
            execute()


def on_release(key):
    if any([key in COMBO for COMBO in COMBINATIONS]):
        current.remove(key)


with keyboard.Listener(on_press=on_press, on_release=on_release) as listener:
    listener.join()
