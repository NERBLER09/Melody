#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

use audiotags::Tag;
use soloud::*;

fn main() {
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![read_song_metadata, play_audio])
    .run(tauri::generate_context!())
    .expect("error while running melody");
}

#[tauri::command]
fn read_song_metadata(file_path: &str) -> (String, String, String) {
  let mut tags = Tag::new().read_from_path(file_path).unwrap();

  let mut song_name:&str = "";
  match tags.title() {
    Some(title) => song_name = title,
    None => println!("No title set")
  }

  let mut artist_name: &str = "";
  match tags.artist() {
    Some(artist) => artist_name = artist,
    None => println!("No artist set")
  }

  let mut album_name: &str = "";
  match tags.album_title() {
    Some(album) => album_name = album,
    None => println!("No album set")
  }

  (song_name.into(), artist_name.into(), album_name.into())
}

#[tauri::command]
fn play_audio(file_path: &str) {
    let sl = Soloud::default().unwrap();
    let mut wav = audio::Wav::default();
    // wav.load_mem(include_bytes!("/home/finnegan/Music/Far Caspian/Ways To Get Out (Deluxe)/35mm [XPXqGXZXiRk].mp3")).unwrap();
    wav.load(&std::path::Path::new(&file_path));
    sl.play(&wav);
    while sl.voice_count() > 0 {
        std::thread::sleep(std::time::Duration::from_millis(100));
    }

    // Ok(())
}
