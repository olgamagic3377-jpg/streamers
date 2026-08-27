-- Security and performance follow-up for Streamer Hub
revoke execute on function public.handle_new_user() from anon, authenticated;
revoke execute on function public.is_admin(uuid) from anon;
grant execute on function public.is_admin(uuid) to authenticated;
create index if not exists app_agency_codes_agency_idx on public.app_agency_codes(agency_id);
drop policy if exists profiles_select_own on public.profiles;
create policy profiles_select_own on public.profiles for select to authenticated using (id = (select auth.uid()) or public.is_admin());
drop policy if exists profiles_update_own on public.profiles;
create policy profiles_update_own on public.profiles for update to authenticated using (id = (select auth.uid()) or public.is_admin()) with check (id = (select auth.uid()) or public.is_admin());
drop policy if exists favorites_select_own on public.favorites;
create policy favorites_select_own on public.favorites for select to authenticated using (user_id = (select auth.uid()) or public.is_admin());
drop policy if exists favorites_insert_own on public.favorites;
create policy favorites_insert_own on public.favorites for insert to authenticated with check (user_id = (select auth.uid()));
drop policy if exists favorites_delete_own on public.favorites;
create policy favorites_delete_own on public.favorites for delete to authenticated using (user_id = (select auth.uid()) or public.is_admin());